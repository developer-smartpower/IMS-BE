const express = require("express");
const router = express.Router();

const validateToken = require("../../middlewares/validateToken");
const userManagementController = require("./userManangement.controller");

// CREATE
router.post("/", validateToken, userManagementController.addUser);
router.get("/", validateToken, userManagementController.getUserList);
router.get("/:user_id", validateToken, userManagementController.getUserDetails);
router.put("/:user_id", validateToken, userManagementController.updateUser);

module.exports = router;
