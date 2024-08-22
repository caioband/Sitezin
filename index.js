
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080


console.log(path.join())

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "public","views", "login.html"))
})

app.listen(PORT, ()=>{
    console.log(`Server started at port: ${PORT}`)
})

