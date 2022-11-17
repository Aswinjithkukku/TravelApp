const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/userControllers.js");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);


// routes for admin
router.route("/admin/all").get(allUsers);

module.exports = router;
