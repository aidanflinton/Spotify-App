import React from "react";
import { AccessTokenContext } from "../../contexts/accessTokenContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  const onClick = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/spotify")
      .then((res) => {
        res.json();
        console.log(res.url);
      })
      .then((data) => {
        console.log(data.url);
        window.open(data.url);
      });
    console.log(window.location.href);
    console.log(path);
  };

  const path = window.location.href.split("/")[4];

  let code = "";
  useEffect(() => {
    if (path) {
      code = path.split("=")[1];
      fetch("http://localhost:9000/spotify/callback?code=" + code)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            setAccessToken(data.token);
            console.log(data.token);
            navigate("/home");
          }
        });
    }
  }, []);

  return (
    <div>
      <button onClick={(e) => onClick(e)}>Log in to App</button>
    </div>
  );
}

export default Login;
