const mongoose=require("mongoose");

const userSchema=new mongoose.Schema
(
    {
       name:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true,
       },

       password:{
        type:String,
        required:true,
        unique:true
       }
    },
    {
        collection:'register'
    }
)

const model=mongoose.model('register',userSchema)

module.exports=model;