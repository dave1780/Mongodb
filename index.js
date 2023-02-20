require("dotenv").config("./env")
const mongoose = require("mongoose")
require("dotenv").config("./env")


mongoose.connect(uri,{useNewUrlParser:true,
useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open',(strem)=>{
  console.log("database succesfully  connected ")
})