
import React, {useEffect, useState, useContext} from 'react'
import { List, ListItem, Divider, ListItemText } from '@mui/material'
import {Link} from "react-router-dom"
import axios from "axios"
import { Helmet } from "react-helmet";
import { AccessTokenContext } from "../../contexts/accessTokenContext";


function Inbox() {

  const[chatter,setChatter]=useState([])
  const[info,setInfo]=useState([])
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  useEffect(() => {

    //fetch person info
    fetch("http://localhost:9000/spotify/me?token=" +
    accessToken)
      .then((res) => res.json())
      .then((data) => {
        console.log("personal data: "+ data);
        setInfo(data);
        getUsers(data.display_name);
      });

    

  }, [accessToken])

  const getUsers = (cn)=>{
    axios.get("http://localhost:9000/spotify/chat?myParam=10", { params: { name: cn }})
    .then((res) => res.data)
    .then((text) => setChatter(Object.entries(text[0]).slice(1)))
    .then(console.log(chatter))
    .catch((err) => console.log(err))
  }

  console.log(info.display_name)
  const style = {

    width: '400px',
    bgcolor: 'background.paper',
    margin:'5%'
  };
  return (
    <div>
      <Helmet>
        <title>Inbox</title>
      </Helmet>

      <List sx={style} component="nav" aria-label="mailbox folders">
      {chatter.map((chat)=>(
        <ListItem button component={Link} to={'/inbox/detail'} state={{ username: info.display_name, name: chat[0], content:chat[1] }}>
          <ListItemText primary={chat[0]} />
        </ListItem>
      ))}
       </List>
      
      
     
  

    </div>
  )
}

export default Inbox; 

