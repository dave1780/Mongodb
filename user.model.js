const mongoose= require("mongoose");
const { resourceLimits } = require("worker_threads");
const Moduel =require("./user.schema");
const newUserCreation= async ()=>{
  try{
const newUser= new Moduel({
  name: "Dave parker",
  age:40,
  address:"sukasal-10"
})

const result = await newUser.save();
console.log(result)
  }catch(err){
    console.log(err)
  }
}
newUserCreation();
module.exports= newUserCreation;