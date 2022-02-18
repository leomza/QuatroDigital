const express = require("express");
const router = express.Router();

const { passwordMatch } = require("../middlewares/passwordMatch");
const { completeInformation } = require("../middlewares/completeInformation");
const { passwordStrong } = require("../middlewares/passwordStrong");

const { newUser, login } = require("../controllers/controllerUsers");

router.post(
  "/register",
  completeInformation,
  passwordMatch,
  passwordStrong,
  newUser
);
router.post("/login", passwordMatch, login);

module.exports = router;
