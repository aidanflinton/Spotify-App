var express = require('express');
var router = express.Router();

const db = require("./firebase");
const { doc, addDoc, collection, getDocs, updateDoc, deleteDoc, increment } = require('firebase/firestore');


module.exports = router;
