// const express = require("express");
import express from "express";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT ;

app.get("/", (req, res)=>{
   res.send("Hello world node mon 1")
})

app.get("/hoidanit", (req, res)=>{
   res.send("Hello Eric")
})

app.listen(PORT, ()=> {
    console.log(`MY app running on port: ${PORT}`);
    
})