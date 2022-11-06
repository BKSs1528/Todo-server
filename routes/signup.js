const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

const userModel = require("../modals/userModel")

const salt = 13

router.post("/reg", async (req, res) => {
    userModel.find({
        mail: req.body.mail
    }).then((data) => {
        console.log(1);
        if (data.length) {
            console.log(2);
            res.status(400).json("User Already Exist")
        } else {
            console.log(3);
            bcrypt.genSalt(salt).then((saltHash) => {
                console.log(4);
                bcrypt.hash(req.body.password, saltHash).then((hashedPassword) => {
                    console.log(5);
                    userModel.create({
                        mail: req.body.mail,
                        password: hashedPassword
                    }).then((userData) => {
                        console.log(6);
                        res.status(200).send({ userData });
                    })
                }).catch((err) => {
                    console.log(err);
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    })
})




module.exports = router