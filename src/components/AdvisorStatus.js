import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhoneEnabledRoundedIcon from '@material-ui/icons/PhoneEnabledRounded';
import PhoneDisabledRoundedIcon from '@material-ui/icons/PhoneDisabledRounded';

const useStyles = makeStyles(theme => ({
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

function AdvisorStatus(props) {
    const classes = useStyles();
    if (props.status) {
      return <PhoneEnabledRoundedIcon className={classes.onlineAvatar}/>
    } else {
      return <PhoneDisabledRoundedIcon className={classes.offlineAvatar}/>
    }
  }

export default AdvisorStatus