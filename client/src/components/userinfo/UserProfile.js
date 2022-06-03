import React, {useState, useEffect} from 'react'
import { Button, Stack, TextField } from '@mui/material';
import axios from "axios";

function UserProfile(props) {
  const username = props.username;

  const changePublic = (props) => {
    axios.put("http://localhost:9000/currentprofile/privacy/", {
      user_id: username,
      is_public: props
    })
  }
  return (
    <div>
      UserProfile
      <Button variant="contained" onClick={() => changePublic(true)} color="success">Public</Button>  
      <Button variant="contained" onClick={() => changePublic(false)} color="success">Private</Button>  
    </div>
    
  )
}

export default UserProfile