import React from 'react'
import {useState} from 'react'
import Avatar from '../../../../images/avatar.svg';
// import "../css/Profile.css"

function ImageEditor() {

    const [file,setFile]=useState(null);

    const inputHandler = (event)=>{
        setFile(URL.createObjectURL(event.target.files[0]));
    }
    if (file === null) { 
        setFile(Avatar);
    }
    return (
        <>
        <div class="col-md-4 mx-auto">
        <center><img  alt="main" class="img-fluid d-block rounded-circle " src={file} style={{height:"20vh",border:"solid",borderColor:"black",borderWidth:"thin"}} /></center>
          <center> <input className="py-4" type="file" onChange={(event) => inputHandler(event)}/> </center>
        </div>
        </>
    )
}

export default ImageEditor