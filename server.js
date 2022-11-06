const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")



const app = express()
app.use(cors());
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({extended:false}));
dotenv.config();


const url ="mongodb://localhost:27017/todo"
mongoose.connect(url,{useNewUrlParser: true},(err)=>{
    if(!err){
        console.log("DB Connected");
    }
    else{
        console.log(err);
    }
});
let port = process.env.PORT || 8000

app.listen(port,(err)=>{
    if(!err){
        console.log(`"server running" on ${port}`);
    }else{
        console.log(err);
    }
});


app.get("/",(req,res)=>{
    res.send("Home Page")
});

app.use("/todo",require("./routes/signup"))
app.use("/todo",require("./routes/login"))
app.use("/todo",require("./routes/logout"))
app.use("/todo",require("./routes/viewPage"))
app.use("/todo",require("./routes/addActivity"))