const { strictEqual } = require("assert");
const mongoose = require("mongoose")
const uri = "mongodb+srv://Dave150:Dave90@cluster1.xu4paq5.mongodb.net/?retrywrites=true&w=majority";
mongoose.set('strictQueryt',true)
mongoose.connect(uri,{useNewUrlParser:true,
useCreateIndex:true})
const connection = mongoose.connection;
connection.once('open',(strem)=>{
  console.log("database succesfully  connected ")
})