const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "YOUR_SECRET_KEY";

const signup = async (req, res) => {
  const { name, email, password, phoneNumber, age, gender, city, state, incentives } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      age: age,
      gender: gender,
      city: city,
      state: state,
      incentives: incentives
    });

    await newUser.save();

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, SECRET_KEY);
    res.status(200).json({ user: newUser, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
    res.status(200).json({ user: existingUser, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { signup, signin };
