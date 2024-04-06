const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the event
const EventSchema = new Schema({
  name: String,
  description: String,
  venue: String,
  timings: String,
  dates: [Date],
  organizers: [{
    type: Schema.Types.ObjectId,
    ref: 'Organization'
  }],
  contact: {
    address: String,
    email: String,
    phone: String
  },
  people_enrolled: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  people_attended: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  impressions: Number,
  prizes: [String]
});

// Define the organization schema
const OrganizationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  organisation: {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  about: {
    type: String,
    // required: true
  },
  established_date: {
    type: Date,
    // required: true
  },
  organisation_head: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User schema
    // required: true
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User' // Reference to the User schema
  }],
  events_conducting: [{
    type: Schema.Types.ObjectId,
    ref: 'Event' // Reference to the Event schema
  }],
  events_conducted: [{
    type: Schema.Types.ObjectId,
    ref: 'Event' // Reference to the Event schema
  }],
  contact: {
    address: String,
    email: String,
    phone: String
  }
});

const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    city: String,
    state: String,
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phoneNumber: String,
    incentives: [String],
    eventsAttended: [{
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }],
    eventsEnrolled: [{
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }],
    badgesEarned: [String]
  });
  
const User = mongoose.model('User', UserSchema);
const Organization = mongoose.model('Organization', OrganizationSchema);
const Event = mongoose.model('Event', EventSchema);

module.exports = { Organization, Event , User};
