const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    res.send("hello I am sahid jamal")
});

app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
})