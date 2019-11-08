import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AdvisorStatus from './AdvisorStatus'


const useStyles = makeStyles( theme => ({
    offlineAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: '#d81b60',
      cursor: 'not-available'
    },
    onlineAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: '#00acc1',
      cursor: 'pointer',
    },
  }));

function AdvisorAvatar(props) {
    const classes = useStyles();
    return (
       <ListItemAvatar>
         <Avatar className={ props.status ? classes.onlineAvatar : classes.offlineAvatar}>
           <AdvisorStatus status={props.status} />
         </Avatar>
       </ListItemAvatar>
    )
}

export default AdvisorAvatar