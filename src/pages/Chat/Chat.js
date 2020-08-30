import React,{useState} from 'react'
import ProfileNav from '../../components/ChatComp/ProfileNav/ProfileNav';
import Search from '../../components/ChatComp/Util/Search/Search';
import AddIcon from '../../components/ChatComp/Add/Position'; 
import Logout from '../../components/ChatComp/Add/Logout'; 
import FrontPage from '../../components/ChatComp/FrontPage/FrontPage';
import ChatDisp from '../../components/ChatComp/ChatDisp/ChatDisp';
import ListFriends from '../../content/ListFriends';
import { BrowserRouter,Route, Switch ,useRouteMatch} from 'react-router-dom';

const Friends = {
    list:[]
}


function Chat() {

    let { path, url } = useRouteMatch();
    const [ARR, setARR] = useState(localStorage.getItem('FriendList')===null?[]:JSON.parse(localStorage.getItem('FriendList')));

    const Add = ({Name,Mobile}) =>{
        let temp = {                                                                                        //For Adding Friends Done 
            Name:Name,                                                                                      //But only watch Friends add in
            Mobile:Mobile                                                                                   //local storage only...
        }
        if(Friends.list.length===0 && JSON.parse(localStorage.getItem('FriendList'))!==null){
            Friends.list=JSON.parse(localStorage.getItem('FriendList'))
        }
        Friends.list.push(temp);
        setARR(Friends.list);
        localStorage.setItem('FriendList',JSON.stringify(Friends.list));
        console.log(ARR,"New")
    }

    // const Delete =({Name,id,Mobile}) =>{                                                 //For Removing Friends Ready Not Implement 
    //     var lg = Friends.list.length                                                      //Bcoz Data is Coming from Javascript File Not From Database                                      
    //     if (lg || localStorage.getItem("FriendList")) {                                     //You can see Data is Deleting from localStorage,,,
    //       Friends.list.forEach((item, index) => {
    //         if (item.id === id) {
    //           Friends.list.splice(index, 1);
    //         }
    //       })
    //     }
    //     setARR(Friends.list)
    // }

    return (
        <div className="p-3" style={{backgroundColor:"#090E11"}}>
            <BrowserRouter>
        <div className="container-fluid" >
            <div className="row">
            <div className="col-md-4 border rounded"  style={{backgroundColor:"#2A2F32",height:'8vh'}}>
             <ProfileNav/>
            </div>
            <div className="col-md-8 border rounded" style={{backgroundColor:"#2A2F32"}}>
            {/* <FriendNav/> */}
            </div>
            </div>
            <div className="row">
            <div className="col-md-4 border rounded px-0" style={{backgroundColor:"#131C21",height:"88vh"}} >
             {/* <FriendList Arr={ARR}/> */}
             <Search match={url}/>
             <AddIcon Add={Add}/>
             <Logout/>
            </div>
            <div className="col-md-8 border rounded px-0"  style={{backgroundColor:"#0D1418"}}>
            <Switch>
            {ListFriends.map((props,index)=> <Route path={`${path}/${props.Name}`} render={()=><ChatDisp PROP={props}/>}/>)}
            {/* <Route path={`${path}/:Id`} component={ChatDisp}/> */}
            <Route exact component={FrontPage}/>
            </Switch>
            </div>
            </div>
        </div>
        </BrowserRouter>
        </div>
    )
}

export default Chat
