const express = require("express")
const router = express.Router()

const db = require("./firebase.js")

const {doc, setDoc, getDocs, collection, addDoc, deleteDoc} = require("firebase/firestore")


router.get("/info", async (req,res,net) => {
    

    const allDocData = []
     // console.log(req.query)  // shows the URL params (stuff after the ? in the URL)
    const docs = await getDocs(collection(db, "CountryForum"))
    docs.forEach((doc) => allDocData.push({doc_id: doc.id, ...doc.data()}))
    res.json(allDocData)
})

router.post("/post", async (req, res, next) => {
    console.log(req.body)
    

    const result = await addDoc(collection(db, "CountryForum"),{
        content: req.body.content,
        username: req.body.username,
        likes: req.body.likes,
        time: req.body.timeMade
    });


    res.send("received")
})

router.put("/put", async (req, res, next) => {
    console.log(req)
    const result = await setDoc(doc(db, "CountryForum"),{
        content: req.body.content,
        username: req.body.username,
        likes: req.body.likes + 1
    });

    res.send("received")
})


module.exports = router