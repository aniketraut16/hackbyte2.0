const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber:{
    type: String,
    required: true,
  },
  age:{
    type: Number,
    required: true,
  },
  gender:String,
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  incentives: Number,
});

const User = mongoose.model("User", UserSchema);

module.exports = {User} ;
