import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

function ProfileNav() {
    var name = JSON.parse(localStorage.getItem('user')).UserName
    return (
        <div className="mt-2">
        <div className="clearfix">
            <div className="float-left">
            <ListItemAvatar>
          <Avatar alt={name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
            </div>
            <div className="float-right mt-1">
    <h4 className="my-auto mt-3 pr-3" style={{color:"#B1B3B5"}}>{name}</h4>
            </div>
        </div>
        </div>
    )
}

export default ProfileNav
