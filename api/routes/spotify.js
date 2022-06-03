var express = require('express');
var router = express.Router();

const db = require("./firebase");
const { doc, addDoc, collection, getDocs, updateDoc, deleteDoc, increment } = require('firebase/firestore');


router.get("/chat", async (req, res, next) => {
    const allDocData = []
    console.log("chat req: "+req.query.name)
    const docs = await getDocs(collection(db, "chat"))
    //If the id of the doc equals to the currnet user's name, we want his data
    docs.forEach((doc) => (doc.id===req.query.name) ? allDocData.push({id:doc.id,...doc.data()}):null)
    console.log("allDocData: "+ allDocData)
    res.status(200).json(allDocData)
  })

router.post("/post",async (req,res,next)=>{
    const newContent={
        message: req.body.msgBody,
        user: req.body.username
    }
    const chatee = req.body.name;
    // console.log("message: "+[req.body.msgBody])
    // console.log("chatee: "+chatee)
    // console.log("current user: "+[req.body.username])
   //get the array and add the new value
   const newData = []
    const docs = await getDocs(collection(db, "chat"))
    docs.forEach((doc) => (doc.id===req.body.username) ? newData.push({id:doc.id,...doc.data()}):null)
    console.log(newData[0][chatee])
    // Object.keys(newData[0]).forEach((field)=>(field===req.body.name)?newData[0][field].push(newContent):null)
    newData[0][chatee].push(newContent)
    updateDoc(doc(db,"chat",req.body.username),{ [chatee] :newData[0][chatee]})
    .then((docRef)=>{res.send("Received")})

})

module.exports = router;
