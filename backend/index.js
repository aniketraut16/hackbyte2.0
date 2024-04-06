const express = require("express")
const app = express()

const mongoose = require("mongoose");
const MongoDBUrl = "mongodb://localhost:27017";
async function connectToDatabase() {
  try {
    await mongoose.connect(MongoDBUrl);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();


const organisationroutes = require('./routes/OrganisationRoutes');
app.arguments(organisationroutes)

app.listen(5000, ()=>{ 
    console.log("Server started on port 5000")
})