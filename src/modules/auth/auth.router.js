const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/signin", authController.signIn);
router.get("/signout", validateToken, authController.signOut);
router.post("/tokens", authController.getNewTokens);
router.get("/me", validateToken, authController.getProfileDetails);

//
router.post("password/forgot", authController.forgotPassword);
router.post("password/reset", validateToken, authController.resetPassword);

module.exports = router;
