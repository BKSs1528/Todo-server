const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
require("dotenv").config()
const userModel = require("../modals/userModel")
const key = process.env.key



router.post("/login", async (req, res) => {
    userModel.find({ mail: req.body.mail }).then((userdata) => {
        if (userdata.length) {
            bcrypt.compare(req.body.password, userdata[0].password).then((validate) => {
                if (validate) {
                    const authToken = jwt.sign(userdata[0].mail, key);
                    console.log(authToken);
                    res.status(200).send({ authToken });
                }
                else {
                    res.status(400).json("Invalid Password");
                }
            })
        } else {
            res.status(400).json("Invalid Password");
        }
    })
})


module.exports = router