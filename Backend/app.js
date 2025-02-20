const dotenv=require('dotenv')
dotenv.config()

const express=require('express')
const app=express()

//for now all domain are allowed jab domain milega
//tab sirf usko allow karenge
const cors=require('cors')
app.use(cors())

//res.send header and sab set karta hai and automatic end karta hai 
// res.send aise nahi karta raw data send karta hai bas 

app.get('/',(req,res)=>{
    res.send("namste world")
})

module.exports=app