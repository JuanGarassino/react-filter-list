import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';



import AdvisorAvatar from './AdvisorAvatar'


function AdvisorRow({advisor}) {
    return   ( <article>
                <ListItem key={advisor.id}>
                  <AdvisorAvatar status={advisor.status}></AdvisorAvatar>
                  <ListItemText primary={advisor.name + ' ' + advisor.surname}  secondary={
                    <React.Fragment>
                      is
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary">
                        {advisor.status ? ' available ' : ' not availabe '} 
                      </Typography>
                      right now and has {advisor.reviews} reviews
                    </React.Fragment>
                  } />
                </ListItem>
                <Divider variant="inset" component="li" />
               </article>
    )
}
export default AdvisorRow