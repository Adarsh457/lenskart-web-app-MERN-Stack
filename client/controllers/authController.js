const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { userName, email, password, phoneNumber } = req.body;

    //Check emptyness of the incoming data
    if (!userName || !email || !password || !phoneNumber) {
      return res.json({ message: "Please enter all the details" });
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      return res.status(400).json({ message: "Phone number must be 10 digits" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters" });
    }

    if (userName.trim().length < 4) {
      return res.status(400).json({ message: "Username must be at least 4 characters" });
    }

    //Check if the user already exist or not
    const userExist = await userModel.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(200).json({
        success: false,
        message: "User already exist with the given emailId",
      });
    }

    // Hash the Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    req.body.password = hashPassword;

    const user = new userModel(req.body);
    await user.save();
    return res.status(200).json({
      success: true,
      message: "User Registered Successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all the details" });
    }
    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      return res
        .status(404)
        .send({ success: false, message: "Invalid credentials" });
    }
    const isPasswordMatched = await bcrypt.compare(
      password,
      userExist.password
    );
    if (!isPasswordMatched) {
      return res
        .status(401)
        .send({ success: false, message: "Invalid credentials" });
    }
    const token = await jwt.sign(
      { userId: userExist._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).send({
      success: true,
      message: "LoggedIn Successfully",
      token,
      userExist,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error });
  }
};


const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User Fetched Successfully",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "unable to get current user",
      error,
    });
  }
};

module.exports = { registerController, loginController, currentUserController };
