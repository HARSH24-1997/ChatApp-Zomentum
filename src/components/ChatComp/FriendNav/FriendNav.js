import React from 'react'
import Delete from '../Delete/Delete';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

function FriendNav() {
    return (
           <div className="clearfix mt-2">
            <div className="float-left">
                <div className="row px-3">
                <ListItemAvatar>
            <Avatar alt="Raj" src="/static/images/avatar/1.jpg" />
             </ListItemAvatar>
                    <div className="mt-1"><h4 style={{color:"#BDBDBD"}}>Raj</h4></div>
                </div>
            </div>
            <div className="float-right">
                <Delete />
            </div>
        </div> 
    )
}

export default FriendNav
