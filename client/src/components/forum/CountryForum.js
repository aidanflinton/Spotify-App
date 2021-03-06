import React from "react"
import {useState, useEffect, useRef} from "react"
import axios from "axios"
import { Card, CardActions, CardContent, Button, Typography, Grid, CardHeader } from '@mui/material';
import heartpic from "./heartpic.jpg"
import dmpic from "./dmpic.jpg"
import starpic from './pic23.jpg'
import {Helmet} from "react-helmet";


function CountryForum(){

    
    const [info, setInfo] = useState([]);
    const [theUser, setTheUser] = useState("");
    const messageRef = useRef(null);
    const authorRef = useRef(null);
    const [saved, setSaved] = useState(false)

    useEffect(() => {
      getInfo();
      
    }, [])
  
    const getInfo = () => {
      console.log("getting info")
      fetch("http://localhost:9000/countryforum/info")
      .then((res) => res.json())
      .then((text) => setInfo(text))
      //.then(sortFunction(info))
      .catch((err) => console.log(err))
      
      
      
    }

    /*
    const sortFunction = (info) => {
  
        console.log("This is the info",info)
        setInfo(info.sort(byTime))

    }
    

    function byTime(a, b){
      console.log("I am sorting")
      if (a.likes > b.likes)
        return -1;
      if (a.likes < b.likes)
        return 1;
      return 0;
    }

    */

    const addpost = () => {
      axios.post("http://localhost:9000/countryforum/post", {
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
  
  
    /*
    const incrementlike = (user, referenceid) => {
      console.log(referenceid)
      axios.put("http://localhost:9000/countryforum/put", {
        content: user.content,
        username: user.username,
        id: user.id,
        likes: (user.likes + 1),
        
      })
      .then((res) => console.log(res.data));
      getInfo();
    }
    */

  
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

export default CountryForum