const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../modals/userModel");
// const propModel = require("../models/propSchema");

const dotenv = require("dotenv");
dotenv.config();
const key = process.env.key;

router.get("/done", (req, res) => {
    const mail = jwt.verify(req.headers.authorization, key);
    userModel.find({ mail: mail }).then((userData) => {
        res.send(userData);
    })
})

module.exports = router;