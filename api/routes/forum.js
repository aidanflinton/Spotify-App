const express = require("express")
const router = express.Router()

const db = require("./firebase.js")

const {doc, setDoc, getDocs, collection, addDoc, deleteDoc} = require("firebase/firestore")


router.get("/info", async (req,res,net) => {
    

    const allDocData = []
     // console.log(req.query)  // shows the URL params (stuff after the ? in the URL)
    const docs = await getDocs(collection(db, "forum"))
    docs.forEach((doc) => allDocData.push({doc_id: doc.id, ...doc.data()}))
    res.json(allDocData)
})

module.exports = router