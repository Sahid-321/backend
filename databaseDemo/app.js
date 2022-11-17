const { hslToRgb } = require("@material-ui/core");
const express  = require("express")
const app = express();

const PORT = 5000;
require("./db/conn");

const path = require("path");
const hbs  = require("hbs")



const register = require("./model/register");




const static_page = path.join(__dirname,"./public")
const templates_path = path.join(__dirname,"./templates/views")
const partial_path = path.join(__dirname,"./templates/partials")


app.use(express.static(static_page));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partial_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}))




app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/register", (req,res)=>{
    res.render("register")
})

app.post("/register", async (req,res)=>{
try {
    
    const newRegister = new register({
        name: req.body.name,
        phone: req.body.phone
    })

    await newRegister.save();
    console.log("data stored");


} catch (error) {
    console.log(error, "error");
}
})

app.listen(PORT, ()=>{
    console.log(`server connected at port ${PORT}`);
})