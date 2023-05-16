require('dotenv').config();
// const fs =require ('fs')

// const pubFs=fs.join(__dirname,'index')
// const index = fs.readFileSync('index.html','utg-8');
// const data= fs.readFileSync('data.json','utf-8')
const express = require("express");
const server =  express();

// server.get("/homepage",(request,response)=>{
//     // response.json({name:"hey"})

//     ///Req.query
//     let personName =request.query.name;
//     response.json({name:personName})
// })

// /////request params
// server.get("/school/:name",(request,response)=>{
//     // response.json({name:"hey"})

//     let schoolName =request.params.name;
//     response.json({name:schoolName})
// })

server.get('/',(req,res)=>{
//    res.send('hellddo')
    res.sendFile('')
})


server.listen(process.env.PORT,()=>{
    console.log("server started ",
    process.env.PORT)
})