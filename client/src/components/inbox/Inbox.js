import React, {useEffect, useState} from 'react'
import { List, ListItem, Divider, ListItemText } from '@mui/material'
import {Link} from "react-router-dom"
import axios from "axios"

function Inbox() {

  const[chatter,setChatter]=useState([])

  useEffect(() => {
    axios.get("http://localhost:9000/spotify/chat?myParam=10", { params: { name: "userTest1" }})
    .then((res) => res.data)
    .then((text) => setChatter(Object.entries(text[0]).slice(1)))
    .then(console.log(chatter))
    .catch((err) => console.log(err))
  }, [])

  console.log(chatter)
  const style = {

    width: '400px',
    bgcolor: 'background.paper',
    margin:'5%'
  };
  return (
    <div>
      <List sx={style} component="nav" aria-label="mailbox folders">
      {chatter.map((chat)=>(
        <ListItem button component={Link} to={'/inbox/detail'} state={{ username: "userTest1", name: chat[0], content:chat[1] }}>
          <ListItemText primary={chat[0]} />
        </ListItem>
      ))}
       </List>
      
      
     
  

    </div>
  )
}

export default Inbox 