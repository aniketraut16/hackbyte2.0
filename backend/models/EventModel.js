const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: String,
  description: String,
  venue: String,
  timings: String,
  dates: [Date],
  organizers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
  contact: {
    address: String,
    email: String,
    phone: String,
  },
  people_enrolled: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  people_attended: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  impressions: Number,
  prizes: [String],
});

const Event = mongoose.model("Event", EventSchema);

module.exports = { Event };
