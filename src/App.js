import React, {useState, useEffect} from 'react';
import './App.css';
// Material modules
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';


import AdvisorRow from './components/AdvisorRow'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));



function AdvisorsTable({advisors}) {
  const classes = useStyles();

  return  <List className={classes.root}>
            {advisors.map((advisor, i) => {
              return  <AdvisorRow advisor={advisor} key={i}></AdvisorRow>        
            })}
          </List>
}


function App() {
  let [loading, setLoading] = useState(true);
  let [advisors, setAdvisors] = useState([]);
  const classes = useStyles();

   let sortByReview = (advisors) => {
    console.log('First sort function')
    console.log(advisors)
    advisors.sort( (a,b) => {
      if ( a.reviews > b.reviews ) return 1
      if ( a.reviews < b.reviews ) return -1
      return 0
    });
  }
  
  async function fetchData() {
    const res = await fetch("http://localhost:3000/advisors");
    let response = await res.json()
    setAdvisors(response.advisors)
    setLoading(false);
  }
  
  useEffect(() => {
    fetchData();
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
            <Button variant="contained" color="primary" onClick={() => sortByReview(advisors)}>
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
