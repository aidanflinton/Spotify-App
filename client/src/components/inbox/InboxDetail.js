import React from 'react'
import { useState, useEffect}  from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"

function InboxDetail() {
    const { state } = useLocation();
    const {username, name, content} = state;
    const[msg,setMsg] = useState("");
    const[chatter,setChatter]=useState([]);
    
    useEffect(() => {
        getMsg()
      }, [])

    const getMsg = () => {
        axios.get("http://localhost:9000/spotify/chat?myParam=10", { params: { name: username }})
        .then((res) => res.data)
        .then((text) => setChatter(Object.entries(text[0]).slice(1)))
        .then(console.log(chatter))
        .catch((err) => console.log(err))
    }

    const sendMsg = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/spotify/post",{
            msgBody:msg,
            name:name,
            username:username
        })
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
        getMsg()
    }

  return (
    <div>
        <h1>Inbox with {name} </h1>
        {/* <p>msg im sending {msg}</p>
        <p>current user: {username}</p>
        <p>the user Im chatting witth{name}</p> */}
        <form>
            <input type="text" onChange={(e)=>setMsg(e.target.value)}/>
            <button type="submit" onClick={sendMsg}>Send</button>
        </form>
        {
            chatter.map((c)=>(c[0]===name)?
            (c[1].map((text)=>
            <p>{text["user"]}: {text["message"]}</p>
            )):null)
        }
        

    </div>
  )
}

export default InboxDetail