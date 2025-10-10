const express = require("express");
const router = express.Router();

const userManangementController = require("./userManangement.controller");

router.post("/add", userManangementController.addUser);
router.get("/list", userManangementController.getuserList);
router.get("/details/:user_id", userManangementController.viewUserDetails);
router.put("/update/:user_id", userManangementController.updateuser);

module.export = router;
