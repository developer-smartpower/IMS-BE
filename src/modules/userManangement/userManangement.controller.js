const responseHandler = require("../../utils/ResponseHandler");
const userManangementService = require("./userManangement.service");

const addUser = async (req, res, next) => {
  try {
    const { name, address, mobile_number, user_name, password } = req.body;
    const response = await userManangementService.addUser(
      name,
      address,
      mobile_number,
      user_name,
      password
    );
    responseHandler(res, {}, "sucess", 200);
  } catch (err) {
    next(err);
  }
};

const getUserList = async (req, res, next) => {
  try {
    const {} = req.body;
    const response = await userManangementService.getUserList();
    responseHandler(res, {}, "sucess", 200);
  } catch (err) {
    next(err);
  }
};

const viewUserDetails = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const response = await userManangementService.viewUserDetails(user_id);
    responseHandler(res, {}, "success", 200);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const response = await userManangementService.updateUser(user_id);
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
