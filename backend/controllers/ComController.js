const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Community } = require("../models/CommunityModel");

const SECRET_KEY = "YOUR_SECRET_KEY"; // You should use a secure secret key

// Signup route
const signup = async (req, res) => {
  const { name, username, password, about, established_date, contact } = req.body;

  try {
    const existingCommunity = await Community.findOne({ "community.username": username });
    if (existingCommunity) {
      return res.status(400).json({ message: "Community already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCommunity = new Community({
      name: name,
      community: {
        username: username,
        password: hashedPassword,
      },
      about: about,
      established_date: established_date,
      contact: contact,
    });

    await newCommunity.save();

    const token = jwt.sign({ username: newCommunity.community.username, id: newCommunity._id }, SECRET_KEY);
    res.status(200).json({ community: newCommunity, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Signin route
const signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingCommunity = await Community.findOne({ "community.username": username });
    if (!existingCommunity) {
      return res.status(404).json({ message: "Community doesn't exist" });
    }

    const matchPassword = await bcrypt.compare(password, existingCommunity.community.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ username: existingCommunity.community.username, id: existingCommunity._id }, SECRET_KEY);
    res.status(200).json({ community: existingCommunity, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Define routes
// router.post("/signup", signup);
// router.post("/signin", signin);

module.exports = {signup,signin};
