import React,{useState} from 'react'
import ImageEditor from '../Util/ImagEditor/ImageEditor';



function AddForm({Add}) {
  const [Name,setName] =useState('')
  const [Mobile, setMobile] = useState()

    const inputHandler = (event,number) =>{
        if(number===1){
            setName(event.target.value)
        }
        else if(number===2){
            setMobile(event.target.value)
        }
       
      };
    

    const submitHandler = (e) =>{
        e.preventDefault()
        Add({Name,Mobile})
      };


    return (
        <form className="text-left" onSubmit={submitHandler}>
        <div className="form-group"> <label htmlFor="form101" style={{fontSize:"1rem"}}>Name</label> <input type="text"  className="form-control" id="form101" onChange={(event)=>inputHandler(event,1)}/> </div>
        <div className="form-group"> <label htmlFor="form102" style={{fontSize:"1rem"}}>Mobile</label> <input type="number" className="form-control" id="form102" onChange={(event)=>inputHandler(event,2)}/> </div>
        <ImageEditor/>
       <center> <button type="submit" className="btn btn-primary">Submit</button></center>
      </form>
    )
}

export default AddForm
