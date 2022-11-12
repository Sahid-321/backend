const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    }
});

const registerUser = mongoose.model("Register", userSchema);

module.exports = registerUser;