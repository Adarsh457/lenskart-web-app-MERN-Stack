const express = require("express");

//Importing userModel
const { registerController, loginController, currentUserController } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

//Creating express router
const route = express.Router();


route.post("/register", registerController );

//Creating login routes
route.post("/login", loginController);

//Creating user routes to fetch users data
route.get("/current-user", authMiddleware, currentUserController );

module.exports = route;
