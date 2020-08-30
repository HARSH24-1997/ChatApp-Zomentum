import React from 'react'
import './Add.css'
import Avatar from '@material-ui/core/Avatar';

function Position({Temp}) {
    return (
        <>
        <div className="NameButton">
        <Avatar  alt={Temp} src="/static/images/avatar/1.jpg" />
        </div>
        <div className="NameTag">
        <h4 style={{color:"white"}}>{Temp}</h4>
        </div>
        </>
    )
}

export default Position
