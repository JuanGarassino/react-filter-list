import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const [message, setMessage] = React.useState('Place your order');
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">Search your analist</InputLabel>
        <Input id="component-simple" />
      </FormControl>

      <Button variant="contained" color="primary" onClick={() => setMessage('Filter Applied')}>
        Apply filter
      </Button>

      </header>
    </div>
  );
}

export default App;
