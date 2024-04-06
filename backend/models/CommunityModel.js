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
  community_head: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User schema
    // required: true
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User schema
    },
  ],
  events_conducting: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event", // Reference to the Event schema
    },
  ],
  events_conducted: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event", // Reference to the Event schema
    },
  ],
  contact: {
    address: String,
    email: String,
    phone: String,
  },
});

const Community = mongoose.model("Community", CommunitySchema);

module.exports = { Community };
