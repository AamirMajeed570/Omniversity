const express = require("express");
const cors = require('cors');
const SpotifyWebApi = require("spotify-web-api-node");
const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/refresh',(req,res)=>{
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'f474414d628d40a195ec2e18e1680822',
        clientSecret: '63c5acd63cc04c73b2ca5ebf5b4f3160',
        refreshToken,
    })

    spotifyApi
    .refreshAccessToken()
    .then((data)=>{
        res.json({
            accessToken:data.body.accessToken,
            expiresIn:data.body.expiresIn,
        })
        console.log(data.body);
        // console.log(`The Access token has been modified`);
        // spotifyApi.setAccessToken(data.body['access_token'])

    }).catch(()=>{
        res.sendStatus(400);
    })
})

app.post('/login', (req, res)=>{
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'f474414d628d40a195ec2e18e1680822',
        clientSecret: '63c5acd63cc04c73b2ca5ebf5b4f3160'
    })

    spotifyApi.authorizationCodeGrant(code).then(
        (data) => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
            console.log('The token expires in'+ data.body.expires_in);
            console.log('The access token is'+ data.body.access_token);
            console.log('The refresh token is'+ data.body.refresh_token);
            // console.log('The token type is'+ data.body['token_type']);
        }).catch((error)=>{
            res.status(404).json("Error: " + error.message)
        })
})


app.listen(3001,console.log(`Server is Listening at http://localhost:3001`));