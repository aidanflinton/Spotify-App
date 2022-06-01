import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

function Navbar(props) {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div>
      <nav>
        <Button variant="contained" color="success">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </Button>
        <Button variant="contained" color="success">
          <Link to="/discover" style={linkStyle}>
            Discover
          </Link>
        </Button>
        <Button variant="contained" color="success">
          <Link to="/forum" style={linkStyle}>
            Forum
          </Link>
        </Button>
        {
          <Button variant="contained" color="success">
            <Link to="/liked" style={linkStyle}>
              Liked Songs
            </Link>
          </Button>
        }
        {
          <Button variant="contained" color="success">
            <Link to="/artists" style={linkStyle}>
              Top Artists
            </Link>
          </Button>
        }
        {
          <Button variant="contained" color="success">
            <Link to="/songs" style={linkStyle}>
              Top Songs
            </Link>
          </Button>
        }
        {props.login && (
          <Button variant="contained" color="success">
            <Link to="/inbox" style={linkStyle}>
              Inbox
            </Link>
          </Button>
        )}
        {props.login && (
          <Button variant="contained" color="success">
            <Link to="/profile" style={linkStyle}>
              Profile
            </Link>
          </Button>
        )}
        {!props.login && (
          <Button variant="contained" color="success">
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          </Button>
        )}
      </nav>
      <FormControl>
        <Outlet />
      </FormControl>
    </div>
  );
}

export default Navbar;

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
