import React, {useState} from 'react';
import './App.css';
// Material modules
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// Faker module
import Faker from 'faker';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

let name = Faker.internet.userName();
let name2 = Faker.internet.userName();


function App() {
  const [list, setList] = useState(name);
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">{list}</InputLabel>
        <Input id="component-simple" />
      </FormControl>

      <Button variant="contained" color="primary" onClick={() => setList(name2)}>
        Apply filter
      </Button>

      </header>
    </div>
  );
}

export default App;
