var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
var dotenv = require("dotenv").config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const scope =
  "user-top-read user-library-read user-read-private user-read-email"; //<- needs to be updated based on what you want to dogit

router.get("/", async (req, res, next) => {
  try {
    const url =
      "https://accounts.spotify.com/authorize?client_id=" +
      client_id +
      "&response_type=code&redirect_uri=" +
      redirect_uri +
      "&scope=" +
      scope;
    res.status(200).json({ url: url });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/callback", async (req, res, next) => {
  try {
    const code = req.query.code;
    const url =
      "https://accounts.spotify.com/api/token?grant_type=authorization_code&code=" +
      code +
      "&redirect_uri=" +
      redirect_uri;
    const headers = {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret, "utf8").toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    };
    fetch(url, { method: "post", headers: headers })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => {
        obj = {
          token: data.access_token,
        };
        return obj;
      })
      .then((obj) => res.json(obj));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/saved-tracks", (req, res, next) => {
  try {
    const url = "https://api.spotify.com/v1/me/tracks";
    fetch(url, {
      headers: { Authorization: "Bearer " + req.query.token },
    })
      .catch((err) => console.log("saved-tracks", err))
      .then((res) => res.json())
      .then((result) => res.status(200).send(result));
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
