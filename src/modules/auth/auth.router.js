const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);
router.get("/signout", authController.signOut);
router.get("/profileDetails", validateToken, authController.getProfileDetails);
router.post("/tokens", authController.getNewTokens);

module.exports = router;
