const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    }
})

const userModel = new mongoose.model("todo_users",userSchema)

module.exports = userModel;