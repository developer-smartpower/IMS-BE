const express = require("express");
const router = express.Router();

const userManangementController = require("./userManangement.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/", validateToken, userManangementController.addUser);
router.get("/", validateToken, userManangementController.getUserList);
router.get(
  "/:user_id",
  validateToken,
  userManangementController.viewUserDetails
);
router.put("/:user_id", validateToken, userManangementController.updateUser);

module.exports = router;
