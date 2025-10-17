// const express = require("express");
import express from "express";
const app = express();
const PORT = 8080;

app.get("/", (req, res)=>{
   res.send("Hello world")
})

app.get("/hoidanit", (req, res)=>{
   res.send("Hello Eric")
})

app.listen(PORT, ()=> {
    console.log(`MY app running on port: ${PORT}`);
    
})