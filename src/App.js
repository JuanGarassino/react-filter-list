import React, {useState, useEffect} from 'react';
import './App.css';
// Material modules
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PhoneEnabledRoundedIcon from '@material-ui/icons/PhoneEnabledRounded';
import PhoneDisabledRoundedIcon from '@material-ui/icons/PhoneDisabledRounded';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
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


function sortByReview() {
  console.log('First sort function')
}

function AdvisorStatus({status}) {
  const classes = useStyles();
  if (status) {
    return <PhoneEnabledRoundedIcon className={classes.onlineAvatar}/>
  } else {
    return <PhoneDisabledRoundedIcon className={classes.offlineAvatar}/>
  }
}

function AdvisorsTable({advisors}) {
  const classes = useStyles();

  return  <List className={classes.root}>
            {advisors.map((advisor, i) => {
              return  <AdvisorTableRow advisor={advisor} key={i}></AdvisorTableRow>        
            })}
          </List>
}

function AdvisorTableRow({advisor}) {

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
function AdvisorAvatar({status}) {
const classes = useStyles();
 return (
    <ListItemAvatar>
      <Avatar className={ status ? classes.onlineAvatar : classes.offlineAvatar}>
        <AdvisorStatus status={status} />
      </Avatar>
    </ListItemAvatar>
 )
}

function App() {
  let [loading, setLoading] = useState(true);
  let [advisors, setAdvisors] = useState([]);
  const classes = useStyles();
  
  async function fetchData() {
    const res = await fetch("http://localhost:3000/advisors");
    let response = await res.json()
    setAdvisors(response.advisors)
    setLoading(false);
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  if (loading) {
    return (
      <div className="App">
         Loading...
      </div>       
    )    
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="component-simple">Enter name</InputLabel>
            <Input id="component-simple" />
          </FormControl>
            <Button variant="contained" color="primary" onClick={sortByReview}>
              Reviews
            </Button>
          </div>
        </header>
        <section className="App-section">
          <AdvisorsTable advisors={advisors}></AdvisorsTable>
        </section>
      </div>
    );
  }
}

export default App;
