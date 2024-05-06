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
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;

    const user = new userModel(req.body);
    await user.save();
    return res.status(200).json({
      success: true,
      message: "User Registered Successfully",
    });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Check emptyness of the incoming data
    if (!email || !password) {
      return res.json({ message: "Please enter all the details" });
    }
    //Check if the user already exist or not
    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      return res
        .status(404)
        .send({ success: false, message: "Wrong credentials" });
    }
    //Check password match
    const isPasswordMatched = await bcrypt.compare(
      password,
      userExist.password
    );
    if (!isPasswordMatched) {
      return res
        .status(500)
        .send({ success: false, message: "Wrong credentials pass" });
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
    return res.status(500).send({ error: error });
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
