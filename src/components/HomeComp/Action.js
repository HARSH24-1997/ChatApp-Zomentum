import React,{useState} from 'react';
import Login from './Login';
import './HomeComp.css';

function Action() {
    
    const [Flag, setFlag] = useState(true);
    
    const changeFlag =()=>{
        setFlag(!Flag)
    }

    return (
        <div className=" col-md-4 border rounded my-auto shadow-lg">
        <Login Change={changeFlag}/>
        </div>
    )

}

export default Action
