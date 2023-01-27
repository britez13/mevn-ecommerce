const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please complete all fields" });
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ msg: "User already exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({ name, email, token: generateToken(user.id) });
  } else {
    res.status(400).json({ msg: "Invalid user" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json("Pleae complete all fields");
  }

  const user =  await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({ name: user.name, email, token: generateToken(user.id) });
  } else {
    res.status(400).json("Invalid credentials");
  }
};

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10d" });
}

module.exports = {
  register,
  login,
};
