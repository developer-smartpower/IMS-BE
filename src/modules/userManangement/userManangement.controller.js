const responseHandler = require("../../utils/ResponseHandler");
const userManagementService = require("./userManangement.service");

// CREATE
const addUser = async (req, res, next) => {
  try {
    const {
      mobile_number,
      role,
      first_name,
      last_name,
      email,
      landline,
      gender,
      designation,
      status,
    } = req.body;

    const created_by = req.user_id;

    await userManagementService.addUser(
      mobile_number,
      role,
      first_name,
      last_name,
      email,
      landline,
      gender,
      designation,
      status,
      created_by
    );

    responseHandler(res, {}, "success", 201);
  } catch (err) {
    next(err);
  }
};

// READ (LIST)
const getUserList = async (req, res, next) => {
  try {
    const response = await userManagementService.getUserList();
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

// READ (DETAILS)
const getUserDetails = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const response = await userManagementService.getUserDetails(user_id);
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

// UPDATE
const updateUser = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const {
      mobile_number,
      role,
      first_name,
      last_name,
      email,
      landline,
      gender,
      designation,
      status,
    } = req.body;
    const updated_by = req.user_id;

console.log('alksjdlkasjdlksadjkaslkd', user_id)
    
    await userManagementService.updateUser(
      user_id,
      mobile_number,
      role,
      first_name,
      last_name,
      email,
      landline,
      gender,
      designation,
      status,
      updated_by
    );

    responseHandler(res, {}, "success", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addUser,
  getUserList,
  getUserDetails,
  updateUser,
};
