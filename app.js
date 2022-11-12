const { hslToRgb } = require("@material-ui/core");
const express = require("express");
const app = express();
const hbs = require("hbs")
const port = 3000;
require("./db/conn")

const path = require("path");

const static_page = path.join(__dirname,"./public")
const templates_page = path.join(__dirname,"./templates/views")
const partial_page = path.join(__dirname,"./templates/partials")

//console.log(path.join(__dirname,"./public"));

app.use(express.static(static_page));

app.set("view engine", "hbs");
app.set("views",templates_page);

hbs.registerPartials(partial_page);



app.get("/",(req,res) =>{
    res.render("index")
});

app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
})