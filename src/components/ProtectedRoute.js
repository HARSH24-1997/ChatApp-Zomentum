import React from 'react'
import {Redirect,Route} from 'react-router-dom';

function ProtectedRoutes({component:Component,...rest}) {
    return (
        <Route
            {...rest}
            render = { () =>localStorage.getItem('user')!==null?(
            <Component/>
             ):(
                <Redirect to='/'/>
             )
        }
        />
    )
}

export default ProtectedRoutes
