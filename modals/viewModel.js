const mongoose = require("mongoose")


const viewSchema = new mongoose.Schema({
    activity:String,
    status:String,
    timeTaken :String,
    action:String
})

const viewModel = new mongoose.model("view_lists",viewSchema)
module.exports = viewModel;