import React, {useState, useEffect} from 'react'
import { Button, Stack, TextField } from '@mui/material';
import axios from "axios";
import "./Discover.css"
import { width } from '@mui/system';

function Discover() {
  const [users, setUsers] = useState();
  const [username, setUsername] = useState("");
  const [foundUser, setFoundUser] = useState();
  //let users = null;

  useEffect(() => {
    let subUsers = [];
    axios.get("http://localhost:9000/users/")
    .then((res) => {
      console.log(res.data);
      console.log(typeof res.data);
      res.data.forEach((user) => {
        subUsers.push({user_id: user.user_id, is_public: user.isPublic})
      })
      console.log(subUsers);
      subUsers = subUsers.filter((user) => user.is_public);
      console.log(subUsers);
      setUsers(subUsers.map((user) => user.user_id));
      console.log(users);
      console.log(users? users : "null");
    })
    .catch((err) => console.log(err))
  }, []);

  const getUser = () => {
    users.includes(username)? setFoundUser(username): setFoundUser("No user was found")
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

  return (
    <div className = "container">
      <div className = "header">Discover</div>
      <div className = "body">
        <div className = "directory">
          {users? users : null}
        </div>
        <div className = "search">
          <Stack>
            <TextField variant='filled' onChange={(input) => setUsername(input.target.value)}></TextField>
            <Button variant="contained" onClick={() => getUser()}>Get</Button>
            {foundUser}
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Discover