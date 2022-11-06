const express = require("express")
const router = express.Router()
const viewModel = require("../modals/viewModel")
const userModel = require("../modals/userModel")
// const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const key = process.env.key

router.post("/add", async (req, res) => {
    try {
        const mail = jwt.verify(req.headers.authorization,key)
        userModel.find({mail:mail}).then((userData)=>{
            if(userData){
                viewModel.create({
                    activity:req.body.activity,
                    status:req.body.status,
                    timeTaken : req.body.timeTaken,
                    action:req.body.action
                }).then((activityData)=>{
                    res.status(200).json("sucess")
                }).catch((err)=>{
                    res.status(400).json({err})
                })
            }else{
                res.status(400).json("Unauthorised user")   
            }
        })
    } catch (err) {
        console.log(err);
    }
})







module.exports = router;