const mongoose = require("mongoose")
const uri = "mongodb+srv://Dave150:Dave90@cluster1.xu4paq5.mongodb.net/?retrywrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser:true,
useCreateIndex:true})
const connection = mongoose.connection;
connection.once