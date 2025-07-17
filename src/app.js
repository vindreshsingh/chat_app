const express =require('express');

const app=express();

app.use("/test",(req,res)=>{
console.log(">>>> test")
res.send("test")
})

const port= 8000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})