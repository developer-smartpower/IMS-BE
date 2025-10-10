const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);
router.get("/signout", authController.signOut);
router.get("/profileDetails", authController.getProfileDetails);
router.post("/tokens", authController.getTokens);

module.exports = router;
