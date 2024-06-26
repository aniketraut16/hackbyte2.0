const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    description:{
        type:String,
        required:true,
    },
    imageURL:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    }
})

const Report = mongoose.model("Report", ReportSchema);

module.exports = { Report };