const express = require("express");

const app = express();
const PORT = 8080;

app.get("/", (req, res)=>{
   res.send("Hello word")
})

app.get("/hoidanit", (req, res)=>{
   res.send("Hello Eric")
})

app.listen(PORT, ()=> {
    console.log(`MY app running on port: ${PORT}`);
    
})