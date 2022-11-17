const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    }
});

const schemaExport = mongoose.model("Details", userSchema);

module.exports = schemaExport;