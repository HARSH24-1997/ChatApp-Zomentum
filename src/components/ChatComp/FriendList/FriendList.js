import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    overflowY: 'scroll',
    overflowX:"hidden",
    maxHeight: 560,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function FriendList({Result,Match}) {
  const classes = useStyles();

  return (
    <List className={classes.root} >
    {Result.map((props,index)=>(
        <>
        <Link to={`${Match}/${props.Name}`} style={{textDecoration:"none",color:"black"}}><ListItem alignItems="flex-start" key={index}>
        <ListItemAvatar>
          <Avatar alt={props.Name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <ListItemText
          primary={props.Name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {props.LastMsg}
            </React.Fragment>
          }
        />
      </ListItem></Link>
      <Divider variant="inset" component="li" />
      </>
    ))}
    </List>
  );
}
