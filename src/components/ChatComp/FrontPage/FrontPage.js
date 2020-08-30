import React from 'react'
import Avatar from '../../../images/avatar.svg'

function FrontPage() {
    return (
        <div className="py-5 my-5" style={{color:"#B1B3B5"}}>
           <center><h4>Welcome</h4></center>
           <br/>
            <div class="col-md-4 mx-auto">
            <center><img alt="Avatar" class="img-fluid d-block rounded-circle " src={Avatar} style={{height:"20vh",border:"solid",borderColor:"#B1B3B5",borderWidth:"thin"}} /></center>
            </div>
            <br/>
            <center><p><b>Status:</b> To be more specific ,an eagle is a lobster from the right perspective.</p></center>
            <hr/>
            <center><button type="button" class="btn btn-light">Start Conversation</button></center>
            <br/>
            <br/>
           <center> <p>Search for someone to start chatting with or goto Contacts to see who is available </p></center>
        </div>
    )
}

export default FrontPage
