import React from "react"
import {useState, useEffect, useRef} from "react"
import axios from "axios"
import { Card, CardActions, CardContent, Button, Typography, Grid, CardHeader } from '@mui/material';
import heartpic from "./heartpic.jpg"
import dmpic from "./dmpic.jpg"
import starpic from './pic23.jpg'
import {Helmet} from "react-helmet";

function RapForum(){

    const [info, setInfo] = useState([]);
    const messageRef = useRef(null);

    useEffect(() => {
      getInfo();
    }, [])
  
    const getInfo = () => {
      console.log("getting info")
      fetch("http://localhost:9000/rapforum/info")
      .then((res) => res.json())
      .then((text) => setInfo(text))
      .catch((err) => console.log(err))
    }
  
    const addpost = () => {
      axios.post("http://localhost:9000/rapforum/post", {
        content: messageRef.current.value,
        username: "TestUser1",
        likes: 0,
        timeMade: new Date()
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  
      messageRef.current.value = ""
      getInfo();
    }

  if (info.length >0) return(
      <div>
        
      <div>
      <Helmet>
        <title> Country Forum</title>
      </Helmet>
      </div>
      
      <div>
    
  
      <h1>Country Forum Page</h1>
      <h2>{console.log(info)}</h2>
      <h1>Message:</h1>
  
      <input type="text" ref={messageRef} />
      <Button  style={{backgroundColor: "#1DB954", color: '#191414'}} varient="outlined" size={"small"} onClick={() => addpost()}>Post </Button>
  
      
  
  
      <h3> 
        <Grid width="850px">
      {info.map((row) => (
    
        <Card  varient="outlined" sx={{border:'4px solid black', borderRadius:4}} >
      <CardContent>
        
        
        <Typography variant="h5" >
        {row.username}
        </Typography>
        <br />
        <Typography variant="h6">
         {row.content}
        </Typography>
        
      </CardContent>
      <CardActions>
  
        
        <Grid container justify="flex-end">
        <Button  ><img width={"30px"} src={dmpic} alt="The dm image" /></Button>
        </Grid>
  
      </CardActions>
      </Card>
      
      
    ))}
  
    </Grid>
  
    </h3>
    
  
  
  
  </div>
  </div>
     )
}

export default RapForum