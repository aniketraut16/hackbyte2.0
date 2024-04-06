const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city: String,
  state: String,
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: String,
  points: Number,
  eventsAttended: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  eventsEnrolled: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  communityFollowed: [
    {
      type: Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
