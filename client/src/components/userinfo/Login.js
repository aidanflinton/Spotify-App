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
