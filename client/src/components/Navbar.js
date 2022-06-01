import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect}  from "react";

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Navbar() {
  return (
    <div className = "links">
      <nav>
      <Button variant="contained" color="success">
        <Link to="/">Home</Link>
      </Button>
      <Button variant="contained" color="success">
        <Link to="/discover">Discover</Link>
      </Button>
      <Button variant="contained" color="success">
        <Link to="/forum">Forum</Link>
      </Button>
      <Button variant="contained" color="success">
        <Link to="/liked">Liked Songs</Link>
      </Button>
      <Button variant="contained" color="success">
        <Link to="/artists">Top Artists</Link>
      </Button>
      <Button variant="contained" color="success">
        <Link to="/songs">Top Songs</Link>
      </Button>
      <Button variant="contained" color="success">
        <Link to="/profile">Profile</Link>
      </Button>
      <Button variant="contained" color="success">
        <Link to="/profile">Profile</Link>
      </Button>
      <Button variant="contained" color="success">
        <Link to="/login">Login</Link>
      </Button>
      </nav>
    <FormControl>
      <Outlet />
    </FormControl>
      
    </div>
  )
}

export default Navbar

/*
<nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/discover">Discover</Link> |{" "}
        <Link to="/forum">Forum</Link>  |{" "}
        <Link to="/home">Home</Link>  |{" "}
        <Link to="/inbox">Inbox</Link> |{" "}
        <Link to="/liked">Liked Songs</Link> |{" "}
        <Link to="/artists">Top Artists</Link> |{" "}
        <Link to="/songs">Top Songs</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/login"> Login</Link> 
      </nav>
      <Outlet />
      */