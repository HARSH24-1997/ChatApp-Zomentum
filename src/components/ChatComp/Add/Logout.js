import React from 'react'
import {IoMdLogOut} from 'react-icons/io';

import { useHistory } from 'react-router';
import './Add.css'

function Logout() {
    const history = useHistory();

    const fun = ()=> {
        localStorage.removeItem('user');
        localStorage.removeItem('FriendList')
        history.push('/')
    }
    return (
        <>
            <IoMdLogOut className="LogoutButton" color="red" size="1.5em" onClick={fun}/>
        </>
    )
}

export default Logout
