import React, { useState, } from 'react'
import { useHistory } from 'react-router';



function Login({Change}) {

    const [Number, setNumber] = useState();
    const [pwd, setPwd] = useState('');
    const [Name,setName] = useState('');
    const history = useHistory();


    const inputHandler = (event, number) => {
        if (number === 0)
            setNumber(event.target.value);
        else if(number === 1)
            setName(event.target.value);
        else
            setPwd(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(pwd)
        const Cred = {
            MobileNumber:Number,
            UserName:Name
        }
        localStorage.setItem('user',JSON.stringify(Cred));
        history.push(`/Chat`);
    }

    return (
        <div className="container-fluid text-center p-5 Logintextsize">
            <div className="mx-auto">
                <h4 >Log In</h4>
                <br/>
            </div>
            <form onSubmit={submitHandler} className="mx-auto" id="loginForm">
                <div className="form-group"> <input type="number" className="form-control" placeholder="Enter Mobile No." id="form9" autoComplete="none" onChange={(event) => inputHandler(event, 0)} /> </div>
                <div className="form-group"> <input type="text" autoComplete="none" className="form-control" placeholder="UserName" id="form10" onChange={(event) => inputHandler(event, 1)} /> </div>
                <div className="form-group"> <input type="password" autoComplete="none" className="form-control" placeholder="Password" id="form10" onChange={(event) => inputHandler(event, 2)} /> </div>
                <small className="form-text text-muted text-right">
                   {/*Pls login by entering any number and name   */}
                </small> <button type="submit" className="btn btn-primary">Log In</button>
            </form>
        </div>
    )
}

export default Login
