import React, {useState, useEffect} from 'react'
import { Button, Stack, TextField } from '@mui/material';
import axios from "axios";
import "./Discover.css"
import { width } from '@mui/system';
import UserCard from './UserCard';
import { Helmet } from "react-helmet";
import { Link, Outlet } from "react-router-dom";

function Discover() {
  const [users, setUsers] = useState();
  const [username, setUsername] = useState("");
  const [foundUser, setFoundUser] = useState();
  const [profile, setProfile] = useState({user_id: null, username: null, password: null});
  const [likedSongs, setLikedSongs] = useState([]);

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  useEffect(() => {
    let subUsers = [];
    axios.get("http://localhost:9000/users/")
    .then((res) => {
      console.log(res.data);
      res.data.forEach((user) => {
        subUsers.push({user_id: user.user_id, is_public: user.isPublic})
      })
      subUsers = subUsers.filter((user) => user.is_public);
      setUsers(subUsers.map((user) => user.user_id).join("\n\n"));
    })
    .catch((err) => console.log(err))
  }, []);

  const getUser = () => {
    let isPublic = false;
    let subLikedSongs = [];

    if (username.length > 1) {
      users.indexOf(username) != -1? setFoundUser(username): setFoundUser("No user was found");
      if (users.includes(username)) {
        axios.get("http://localhost:9000/users/" + username)
        .then((res) => {
          if (res.data.isPublic) {
              setProfile({user_id: res.data.user_id, username: res.data.username, password: res.data.password});
              isPublic = true;
          }
        })
        .catch((err) => console.log(err))

        axios.get("http://localhost:9000/users/" + username + "/liked/")
        .then((res) => {
          if (isPublic) {
              console.log(res.data);
              res.data.forEach((song) => {
                subLikedSongs.push({song_id: song.song_id, name: song.track})
              })
              setLikedSongs(subLikedSongs.map((song) => song.name));
              console.log(subLikedSongs);
          }
        })
        .catch((err) => console.log(err))
      }
    }
    else if (username.length == 1) {
      setFoundUser("No user was found")
    }
  }

  const changeUsername = (props) => {
    setUsername(props);
    if (!(props)) {
      setFoundUser(null);
      setProfile({user_id: null, username: null, password: null})
    }
  } 

  return (
    <div className = "container">
      <div className = "header"><h2>Discover</h2></div>
      <br />
      <br />
      <div className = "body">
        <div className = "directory">
          <h2>User List</h2>
          <br />
          <br />
          <div className = "element">
            <h4>
              {users? users : null}
            </h4>
          </div>
        </div>
        <div className = "search">
          <h2>More User Info</h2>
          <br />
          <Stack spacing = {3}>
            <TextField id='outlined-basic' onChange={(input) => changeUsername(input.target.value)} placeholder='Search for User'></TextField>
            <Button variant="contained" onClick={() => getUser()} color="success">Get</Button>
            {/* {username? foundUser: null} */}
            <br />
            User: {foundUser}
            <br />
            Spotify Username: {foundUser && foundUser !== "No user was found"? profile.username: null}
            <br />
            Liked Songs: {likedSongs !== []? likedSongs: null}
            <br />
            {foundUser && foundUser !== "No user was found"? ((
              <Button variant="contained" color="success">
                <Link to="/inbox" style={linkStyle}>
                  Message
                </Link>
              </Button>
            )): null}
          </Stack>
        </div>
      </div>
      <div>
        <Helmet>
          <title>Discover</title>
        </Helmet>
      </div>
    </div>
  )
}

export default Discover;
