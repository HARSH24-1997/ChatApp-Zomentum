import React,{useState,useEffect} from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import './chatDisp.css'
import Name from '../Add/Name';

function ChatDisp({PROP}) {
  const [val, setval] = useState('')
  const [check, setCheck] = useState(false)
  var Arr = PROP.Msg;

  const inputHandler = (event, number) => {
    if (number === 0)
        setval(event.target.value);
};

var FName =JSON.parse(localStorage.getItem('user')).UserName

const submitHandler = (event) => {
  console.log(val);
    event.preventDefault();
    var x = {
      msg:val,
      flag:0 
    }
    Arr.push(x);
    // setans(Arr);
    setCheck(true);
}

useEffect(() => {
  setCheck(false)
}, [check])

    return (
        <>
        <Name Temp={PROP.Name}/>
            <div className="py-5">
            <ScrollToBottom >
                {Arr.map((y,index)=>{
                  if(y.flag===1){
                      return (
                      // <p className="pl-10 justifyStart"style={{color:"white"}}>{y}</p>
                      <div className="messageContainer justifyEnd">
                      <p className="sentText pr-10 mt-3">{PROP.Name}</p>
                      <div className="messageBox" style={{backgroundColor:"Orange"}}>
                      <p className="messageText mt-3" style={{Color:"#0077B5"}}>{y.msg}</p>
                      </div>
                      </div>
                      )
                  }
                  else{
                    return ( 
                      <div className="messageContainer justifyStart">
                      <div className="messageBox backgroundLight">
                       <p className="messageText colorDark mt-3">{y.msg}</p>
                      </div>
                    <p className="sentText pl-10 mt-3">{FName}</p>
                    </div>
                    )
                  }
                })}
            </ScrollToBottom>
            </div>
            <div className="container-fluid px-5" style={{backgroundColor:"#323739",color:"white",position:"absolute",bottom:"0px",height:"44px"}}>
            <div class="col-md-12 px-0 mt-1">
          <form onSubmit={submitHandler}>
            <div class="input-group">
              <input type="text" class="form-control form-control" placeholder="Send Msg" style={{backgroundColor:"#323739",color:"#B1B3B5"}}  onChange={(event) => inputHandler(event, 0)} />
              <div class="input-group-append"><button class="btn" style={{backgroundColor:"#EFEFEF"}} type="submit">Send</button></div>
            </div>
          </form>
        </div>
             </div>
            </>
    )
}

export default ChatDisp
