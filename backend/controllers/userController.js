const users=require("../models/userModels")

exports.user_register=async (req,res)=>{
console.log(req.body)
const {name,email,password}=req.body;
try{
const user=await users.create({
    name,
    email,
    password
})
res.json({status:'ok'})
}
catch(error){
    console.log(error)
    res.json({status:'error'})
}
}