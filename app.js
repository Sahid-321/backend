const express = require("express");
const app = express();

const path = require("path");

const static_page = path.join(__dirname,"./public")
//console.log(path.join(__dirname,"./public"));

app.use(express.static(static_page))
const port = 3000;
require("./db/conn")
app.get("/",(req,res) =>{
    res.send("hello I am sahid jamal")
});

app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
})