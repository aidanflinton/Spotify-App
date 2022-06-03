import React, {useState, useEffect} from 'react'
import { Button, Stack, TextField } from '@mui/material';
import axios from "axios";
import "./Discover.css"
import { width } from '@mui/system';
import UserCard from './UserCard';

function Discover() {
  const [users, setUsers] = useState();
  const [username, setUsername] = useState("");
  const [foundUser, setFoundUser] = useState();
  const [profile, setProfile] = useState({user_id: null, username: null, password: null});
  //let users = null;

  useEffect(() => {
    let subUsers = [];
    axios.get("http://localhost:9000/users/")
    .then((res) => {
      // console.log(res.data);
      // console.log(typeof res.data);
      res.data.forEach((user) => {
        subUsers.push({user_id: user.user_id, is_public: user.isPublic})
      })
      //console.log(subUsers);
      subUsers = subUsers.filter((user) => user.is_public);
      //console.log(subUsers);
      setUsers(subUsers.map((user) => user.user_id).join("\n\n"));
      // console.log(users);
      // console.log(users? users : "null");
    })
    .catch((err) => console.log(err))
  }, []);

  const getUser = () => {
    if (username.length > 1) {
      users.indexOf(username) != -1? setFoundUser(username): setFoundUser("No user was found");
      if (users.includes(username)) {
        axios.get("http://localhost:9000/users/" + username)
        .then((res) => {
          // console.log(res.data);
          // console.log(typeof res.data);
          // console.log(res.data);
          if (res.data.isPublic) {
              setProfile({user_id: res.data.user_id, username: res.data.username, password: res.data.password});
          }
        //   res.data.forEach((user) => {
        //     subUsers.push({user_id: user.user_id, is_public: user.isPublic})
        //   })
        //   //console.log(subUsers);
        //   subUsers = subUsers.filter((user) => user.is_public);
        //   //console.log(subUsers);
        //   setUsers(subUsers.map((user) => user.user_id).join("\n\n"));
        //   // console.log(users);
        //   // console.log(users? users : "null");
        })
        .catch((err) => console.log(err))
      }
    }
    else if (username.length == 1) {
      setFoundUser("No user was found")
    }
    
    // let subUsers = [];
    // axios.get("http://localhost:9000/users/username", {user_name: username})
    // .then((res) => {
    //   console.log(res.data);
    //   console.log(typeof res.data);
    //   res.data.forEach((user) => {
    //     subUsers.push({user_id: user.user_id, is_public: user.isPublic})
    //   })
    //   console.log(subUsers);
    //   subUsers = subUsers.filter((user) => user.is_public);
    //   console.log(subUsers);
    //   setUsers(subUsers.map((user) => user.user_id));
    //   console.log(users);
    //   console.log(users? users : "null");
    // })
    // .catch((err) => console.log(err))
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
      <div className = "header">Discover</div>
      <br />
      <div className = "body">
        <div className = "directory">
          User List
          <br />
          <div className = "element">
            {users? users : null}
          </div>
        </div>
        <div className = "search">
          More User Info
          <br />
          <Stack>
            <TextField id='outlined-basic' onChange={(input) => changeUsername(input.target.value)} placeholder='Search for User'></TextField>
            <Button variant="contained" onClick={() => getUser()} color="success">Get</Button>
            {/* {username? foundUser: null} */}
            {foundUser}
            {foundUser || foundUser === "No user was found"? profile.username: null}
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Discover