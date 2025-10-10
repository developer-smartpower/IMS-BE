const AppError = require("../../utils/AppError");
const userManangementModel = require("./userManangement.model");

const addUser = async (name, address, mobile_number, user_name, password) => {
  try {
    const response = await userManangementModel.addUser(
      name,
      address,
      mobile_number,
      user_name,
      password
    );
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const getUserList = async () => {
  try {
    const response = await userManangementModel.getUserList();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const viewUserDetails = async (user_id) => {
  try {
    const response = await userManangementModel.viewUserDetails(user_id);
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const updateUser = async (user_id) => {
  try {
    const response = await userManangementModel.updateUser(user_id);
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

module.exports = {
  addUser,
  getUserList,
  viewUserDetails,
  updateUser,
};
