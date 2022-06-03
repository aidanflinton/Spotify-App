var express = require('express');
var router = express.Router();
const db = require("./firebase");
const {getDocs, collection, doc, getDoc, addDoc, setDoc,  deleteDoc, updateDoc} = require("firebase/firestore")

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    
    let query = await getDocs(collection(db, "users"))
    // let query = await db.collection('messages').get();
    let response = []
    query.forEach((user) => {
        response.push({user_id: user.id, ...user.data()})
    })
    return res.status(200).json(response)
  }
  catch(error){
    console.log(error);
    return res.status(500).send(error);
  }
  res.send('respond with a resource');
});

router.get('/:user_id', async (req, res) => {
  try {
    let query = await getDoc(doc(db, "users", req.params.user_id))
    // let query = await db.collection('messages').get();
    let response = {user_id: query.id, ...query.data()};
    // query.forEach((user) => {
    //     response.push({user_id: user.id, ...user.data()})
    // })
    return res.status(200).json(response)
  }
  catch(error){
    console.log(error);
    return res.status(500).send(error);
  }
  res.send('respond with a resource');
});

router.get('/:user_id/liked/', async (req, res) => {
  try {
    let query = await getDocs(collection(db, "users", req.params.user_id, "likedSongs"))
    // let query = await db.collection('messages').get();
    let response = []
    query.forEach((song) => {
        response.push({song_id: song.id, ...song.data()})
    })
    return res.status(200).json(response)
  }
  catch(error){
    console.log(error);
    return res.status(500).send(error);
  }
  res.send('respond with a resource');
});

module.exports = router;
