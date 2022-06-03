import React from "react";
import { AccessTokenContext } from "../../contexts/accessTokenContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  const[info,setInfo]=useState([]);

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
            getID(data.token);
          }
        });
    }


  }, []);

  const addUserToChat = (cn) => {
    axios.post("http://localhost:9000/spotify/newchat",{
        currname:cn
    })
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
}

  const getID = (access) =>{
    fetch("http://localhost:9000/spotify/me?token=" +
    access)
      .then((res) => res.json())
      .then((data) => {
        console.log("personal data: "+ data.display_name);
        setInfo(data);
        addUserToChat(data.display_name);
      });
  }

  return (
    <div>
      <button onClick={(e) => onClick(e)}>Log in to App</button>
    </div>
  );
}

export default Login;
