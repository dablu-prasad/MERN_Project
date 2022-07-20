const express=require("express");
const app=express();
const cors=require("cors")
require("dotenv").config()
const connectDatabase=require("./database/conn")
const router=require("./Routes/userRoute")

app.use(cors());
app.use(express.json())
app.use(router)
connectDatabase();
const DB=process.env.DB_SERVER;
const port=process.env.PORT;
console.log(DB)
app.listen(port,()=>{console.log(`Node server is started on Port: ${port}`)})