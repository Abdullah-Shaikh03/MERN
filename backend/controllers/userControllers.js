const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill in all fields");
    }
    if (password.length < 8) {
      res.status(400);
      throw new Error("Password must be at least 8 characters");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const salt = 12;
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    user.token = genToken(user._id);

    await user.save();

    res.json({ name, email, token: user.token });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400);
      throw new Error(user.name + " does not exist, Please register");
    } else if (user && !(await bcrypt.compare(password, user.password))) {
      res.status(400);
      throw new Error("Invalid email or password");
    } else {
      res.json({
        name: user.name,
        email: user.email,
        token: user.token,
      });
    }
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  
    const {_id, name, email} = await User.findById(req.user._id);

    
    res.json({
        _id,
        name,
        email,
    }, );
});

const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
    algorithm: "HS256",
  });
};

module.exports = { registerUser, authUser, getUserProfile };
