import React, { useState } from 'react';
import { fade,makeStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Friendlist from '../../FriendList/FriendList';
import ListFriends from '../../../../content/ListFriends';
import './Search.css'

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(1),
      marginLeft: 0,
      width: 'auto',
    },
    searchIcon: {
      padding: theme.spacing(0.9, 1.5),
      height: 'auto',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 0, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    //   transition: theme.transitions.create('width'),
      width: '36ch'
    },

  }));



function Search({match}) {
    const classes = useStyles();
    // const [res,setRes] = useState(localStorage.getItem('FriendList')===null?[]:JSON.parse(localStorage.getItem('FriendList')));

    const [Result,setResult] = useState(ListFriends);

    const inputHandler = (e)=> {
      const value = e.target.value;
      let sugg=[];
      console.log(ListFriends,"fjf")
      if(value.length > 0){
        const Regex = new RegExp(`^${value}`,'i');
         sugg = ListFriends.sort().filter(v => v.Name.match(Regex));
      }
      setResult(sugg);
      if(value===''){
        setResult(ListFriends);
      }
  } 

    return (
      <>
      <div className="p-3">
        <div className={classes.search} style={{backgroundColor:"#323739",color:"#B1B3B5"}}> 
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search Your Friends " 
          fullWidth={true}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={inputHandler}
        />
      </div>
      </div>
       <Friendlist Result={Result} Match={match}/>
       </>
    )
}

export default Search
