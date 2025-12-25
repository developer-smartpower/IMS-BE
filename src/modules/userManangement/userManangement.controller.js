const responseHandler = require("../../utils/ResponseHandler");
const userManangementService = require("./userManangement.service");

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
    } = req.body;
    const user_id = req.user_id;
    await userManangementService.addUser(
      mobile_number,
      role,
      first_name,
      last_name,
      email,
      landline,
      gender,
      designation,
      user_id
    );
    responseHandler(res, {}, "success", 201);
  } catch (err) {
    next(err);
  }
};

const getUserList = async (req, res, next) => {
  try {
    const response = await userManangementService.getUserList();
    responseHandler(res, response, "sucess", 200);
  } catch (err) {
    next(err);
  }
};

const viewUserDetails = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const response = await userManangementService.viewUserDetails(user_id);
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const created_by = req.user_id;
    const {
      mobile_number,
      role,
      first_name,
      last_name,
      email,
      landline,
      gender,
      designation,
    } = req.body;

    await userManangementService.updateUser(
      user_id,
      mobile_number,
      role,
      first_name,
      last_name,
      email,
      landline,
      gender,
      designation,
      created_by
    );
    responseHandler(res, {}, "sucess", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addUser,
  getUserList,
  viewUserDetails,
  updateUser,
};
