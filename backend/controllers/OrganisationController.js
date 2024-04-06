const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Organization } = require('../models/Model');

const createOrganization = async (req, res) => {
  try {
    // Extract organization details from request body
    const { name, username, password, email } = req.body;

    // Check if organization with provided username or email already exists
    const existingOrg = await Organization.findOne({ $or: [{ username }, { email }] });
    if (existingOrg) {
      return res.status(400).json({ message: 'Organization with provided username or email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new organization
    const organization = new Organization({
      name,
      organisation: {
        username,
        password: hashedPassword
      },
      email
    });

    // Save organization to the database
    await organization.save();

    // Generate JWT token
    const token = jwt.sign({ username: organization.organisation.username }, process.env.JWT_SECRET);

    // Send success response with token
    res.status(201).json({ message: 'Organization created successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const loginOrganization = async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Check if organization with provided username exists
    const organization = await Organization.findOne({ 'organisation.username': username });
    if (!organization) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, organization.organisation.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ username: organization.organisation.username }, process.env.JWT_SECRET);

    // Send success response with token
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateOrganization = async (req, res) => {
  try {
    // Extract organization details from request body
    const { name, about, contact } = req.body;

    // Extract token from request headers
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Update organization data
    await Organization.updateOne({ 'organisation.username': decoded.username }, { name, about, contact });

    res.status(200).json({ message: 'Organization data updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getOrganization = async (req, res) => {
  try {
    // Extract token from request headers
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Fetch organization data
    const organization = await Organization.findOne({ 'organisation.username': decoded.username });

    res.status(200).json(organization);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createOrganization, loginOrganization, updateOrganization, getOrganization };
