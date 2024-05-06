import React, { useState } from 'react';
import './Calculate.css';

const Calculate = () => {
    const [value, setValue] = useState('');


    return (
        <>
            <div className="container">
                <div className="inputBox">
                    <input type="text" value={value}  />
                </div>
                <div className="row">
                    <input type="button" value="AC" onClick={() => setValue('')} />
                    <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
                    <input type="button" value="00" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="%" onClick={(e) => setValue(value + e.target.value)} />
                </div>
                <div className="row-1">
                    <input type="button" value="7" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="8" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="9" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="/" onClick={(e) => setValue(value + e.target.value)} />
                </div>
                <div className="row-2">
                    <input type="button" value="6" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="5" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="4" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="*" onClick={(e) => setValue(value + e.target.value)} />
                </div>
                <div className="row-3">
                    <input type="button" value="1" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="2" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="3" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="-" onClick={(e) => setValue(value + e.target.value)} />
                </div>
                <div className="row-4">
                    <input type="button" value="0" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="." onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="+" onClick={(e) => setValue(value + e.target.value)} />
                    <input type="button" value="=" onClick={() => setValue(eval(value))} />
                </div>
            </div>
        </>
    );
};

export default Calculate;
