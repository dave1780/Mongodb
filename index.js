
const mongoose = require("mongoose")
require("dotenv").config("./env")

const uri =process.env.uri;
mongoose.connect(uri,{useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>{
  console.log("database is connected")
}).catch(()=>{
  console.log("error occured ")
})