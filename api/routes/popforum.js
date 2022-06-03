const express = require("express")
const router = express.Router()

const db = require("./firebase.js")

const {doc, setDoc, getDocs, collection, addDoc, deleteDoc} = require("firebase/firestore")


router.get("/info", async (req,res,net) => {
    

    const allDocData = []
     // console.log(req.query)  // shows the URL params (stuff after the ? in the URL)
    const docs = await getDocs(collection(db, "PopForum"))
    docs.forEach((doc) => allDocData.push({doc_id: doc.id, ...doc.data()}))
    console.log(allDocData)
    res.json(allDocData)
})


router.post("/post", async (req, res, next) => {
    console.log(req.body)
    

    const result = await addDoc(collection(db, "PopForum"),{
        content: req.body.content,
        username: req.body.username,
        likes: req.body.likes,
        time: req.body.timeMade
    });


    res.send("received")
})

module.exports = router