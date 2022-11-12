const express = require("express");
const app = express();

const port = 3000;
require("./db/conn")

const path = require("path");

const static_page = path.join(__dirname,"./public")
//console.log(path.join(__dirname,"./public"));

app.use(express.static(static_page));

app.set("view engine", "hbs");



app.get("/",(req,res) =>{
    res.render("index")
});

app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
})