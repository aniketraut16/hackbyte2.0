const express = require("express")
const app = express()

app.use(express.json())
const mongoose = require("mongoose");
const MongoDBUrl = "mongodb+srv://ayushagrawal1811:viTk3z8uaSCA0XV7@hackbyte.edwiahn.mongodb.net/?retryWrites=true&w=majority&appName=Hackbyte";
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
app.use(organisationroutes)

app.listen(5000, ()=>{ 
    console.log("Server started on port 5000")
})