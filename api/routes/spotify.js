var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
var dotenv = require("dotenv").config();

const db = require("./firebase");
const {
  doc,
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  increment,
} = require("firebase/firestore");
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
    console.log(url);
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

router.get("/top-tracks", (req, res, next) => {
  try {
    const url =
      "https://api.spotify.com/v1/me/top/tracks?time_range=" +
      req.query.timeRange;
    fetch(url, {
      headers: { Authorization: "Bearer " + req.query.token },
    })
      .catch((err) => console.log("top-tracks", err))
      .then((res) => res.json())
      .then((result) => res.status(200).send(result));
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/top-artists", (req, res, next) => {
  try {
    const url =
      "https://api.spotify.com/v1/me/top/artists?time_range=" +
      req.query.timeRange;
    fetch(url, {
      headers: { Authorization: "Bearer " + req.query.token },
    })
      .catch((err) => console.log("top-artists", err))
      .then((res) => res.json())
      .then((result) => res.status(200).send(result));
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/me", (req, res, next) => {
  try {
    const url = "https://api.spotify.com/v1/me";
    fetch(url, {
      headers: { Authorization: "Bearer " + req.query.token },
    })
      .catch((err) => console.log("personal info", err))
      .then((res) => res.json())
      .then((result) => res.status(200).send(result));
  } catch (err) {
    res.status(500).send(err);
  }
});

//add user to chat collection when signed in
router.post("/newchat", async (req, res, next) => {
  console.log(req.body.currname);

  const docs = await getDocs(collection(db, "chat"));

  setDoc(
    doc(db, "chat", req.body.currname),
    { dummy: "dummy" },
    { merge: true }
  ).then((docRef) => {
    res.send("Received");
  });
});

router.get("/chat", async (req, res, next) => {
  const allDocData = [];
  console.log("chat req: " + req.query.name);
  const docs = await getDocs(collection(db, "chat"));
  //If the id of the doc equals to the currnet user's name, we want his data
  docs.forEach((doc) =>
    doc.id === req.query.name
      ? allDocData.push({ id: doc.id, ...doc.data() })
      : null
  );
  console.log("allDocData: " + allDocData);
  res.status(200).json(allDocData);
});

router.post("/post", async (req, res, next) => {
  const newContent = {
    message: req.body.msgBody,
    user: req.body.username,
  };
  const chatee = req.body.name;
  // console.log("message: "+[req.body.msgBody])
  // console.log("chatee: "+chatee)
  // console.log("current user: "+[req.body.username])
  //get the array and add the new value
  const newData = [];
  const newDataChatee = [];

  const docs = await getDocs(collection(db, "chat"));
  docs.forEach((doc) =>
    doc.id === req.body.username
      ? newData.push({ id: doc.id, ...doc.data() })
      : null
  );
  //check if chatee is in the database
  docs.forEach((docC) =>
    docC.id === chatee
      ? newDataChatee.push({ id: docC.id, ...docC.data() })
      : null
  );
  console.log("newDataChatee[0][chatee]" + newDataChatee[0][req.body.username]);
  //make sure to update both fields
  newDataChatee.length != 0
    ? Object.keys(newDataChatee[0]).some((key) => key === req.body.username)
      ? newDataChatee[0][req.body.username].push(newContent)
      : ((newDataChatee[0][req.body.username] = []),
        newDataChatee[0][req.body.username].push(newContent))
    : null;

  newDataChatee.length != 0
    ? updateDoc(doc(db, "chat", chatee), {
        [req.body.username]: newDataChatee[0][req.body.username],
      }).then((docRef) => {
        res.send("Received");
      })
    : null;

  newData[0][chatee].push(newContent);
  updateDoc(doc(db, "chat", req.body.username), {
    [chatee]: newData[0][chatee],
  });
});

router.get("/users", async (req, res, next) => {
  const allDocData = [];
  const docs = await getDocs(collection(db, "users"));
  //If the id of the doc equals to the currnet user's name, we want his data
  docs.forEach((doc) =>
    allDocData.push({
      username: doc.username,
      spotUsername: doc.spotUsername,
      private: doc.private,
      id: doc.id,
      ...doc.data(),
    })
  );
  console.log("allDocData: " + allDocData);
  res.status(200).json(allDocData);
});

router.post("/new-user", async (req, res, next) => {
  const newUser = {
    username: req.body.username,
    spotUserName: req.body.spotUsername,
    private: false,
  };
  const newData = [];
  const docs = await getDocs(collection(db, "users"));
});

module.exports = router;
