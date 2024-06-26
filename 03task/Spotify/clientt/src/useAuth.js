import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function useAuth(code) {
  const [accessToken,setAccesToken] = useState()
  const [refreshToken,setRefreshToken] = useState()
  const [expiresIn,setExpiresIn] = useState()

  useEffect(()=>{
    axios.post('http://localhost:3001/login',{
        code,
    }).then((res)=>{
        console.log(res.data);
        setAccesToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({},null,'/');
    }).catch((err)=>{
        // console.log(err)
        window.location = "/";
    })
  },[code])

  useEffect(()=>{
    if(!refreshToken || !expiresIn) return
    const timeOut = setTimeout(()=>{

        axios.post('http://localhost:3001/refresh',{
            refreshToken,
        }).then((res)=>{
            setAccesToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
        }).catch((err)=>{
            console.log(err)
        })
    },(expiresIn-60)*1000)

    return ()=>clearTimeout(timeOut);
    },[refreshToken,expiresIn])
    return accessToken;
}
