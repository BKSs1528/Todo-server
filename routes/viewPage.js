const express = require("express")
const router = express.Router()
const viewModel =require("../modals/viewModel")
const userModel = require("../modals/userModel")
// const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const key = process.env.key

router.get("/view",async(req,res)=>{
    try{
        const mail = jwt.verify(req.headers.authorization, key);
        userModel.find({mail:mail}).then((userData)=>{
            if(userData.length){
                viewModel.find({mail:mail}).then((data)=>{
                    res.send(data);
                })
            }else{
                res.status(400).json("Invalid user");
            }
        })
    }catch(err){
        res.status(400).json(err);
    }
})



module.exports = router