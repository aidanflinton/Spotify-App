import "./Navbar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import { AccessTokenContext } from "../contexts/accessTokenContext";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

function Navbar(props) {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  const navigate = useNavigate();

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  const onClick = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/spotify")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        window.open(data.url);
      });
  };

  useEffect(() => {
    let code = window.location.href.split("/")[3].split("=")[1];
    if (code) {
      fetch("http://localhost:9000/spotify/callback?code=" + code)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            setAccessToken(data.token);
            navigate("/");
          }
        });
    }
  }, [navigate, setAccessToken]);

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
        {accessToken && (
          <Button variant="contained" color="success">
            <Link to="/liked" style={linkStyle}>
              Liked Songs
            </Link>
          </Button>
        )}
        {accessToken && (
          <Button variant="contained" color="success">
            <Link to="/songs" style={linkStyle}>
              Top Songs
            </Link>
          </Button>
        )}
        {accessToken && accessToken && (
          <Button variant="contained" color="success">
            <Link to="/artists" style={linkStyle}>
              Top Artists
            </Link>
          </Button>
        )}
        {accessToken && (
          <Button variant="contained" color="success">
            <Link to="/inbox" style={linkStyle}>
              Inbox
            </Link>
          </Button>
        )}
        {accessToken && (
          <Button variant="contained" color="success">
            <Link to="/profile" style={linkStyle}>
              Profile
            </Link>
          </Button>
        )}
        {!accessToken && (
          <Button
            onClick={(e) => onClick(e)}
            variant="contained"
            color="success"
          >
            Login
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
