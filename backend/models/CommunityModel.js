const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  community: {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  about: {
    type: String,
    // required: true
  },
  established_date: {
    type: Date,
    // required: true
  },
  contact: {
    address: String,
    email: String,
    phone: String,
  },
});

const Community = mongoose.model("Community", CommunitySchema);

module.exports = { Community };
