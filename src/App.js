import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { makeStyles } from '@material-ui/core/styles';

import ShowData from './components/ShowData'
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
  },
}));

function App() {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const onSearchInputChange = (event) => {
    if (event.target.value.length > 5) {
      setPage(page + 1);
    }
    else {

    }
  };

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <TextField style={{ padding: 24 }}
            id="searchInput"
            placeholder="Search for data"
            margin="normal"
            onChange={onSearchInputChange}
          />
        </Grid>
        {/* <button onClick={reloadData}>reload</button> */}
     <Grid container spacing={2}>
          <Grid item xs={2} className="sideBar">
            <SideBar />
          </Grid>
          <Grid item xs={8}>
            <ShowData url={page} />
          </Grid>
        </Grid>
      </Grid >
    </div >
  );
}

export default App;
