const AppError = require("../../utils/AppError");
const userManangementModel = require("./userManangement.model");
const bcrypt = require("bcrypt");

const addUser = async (
  mobile_number,
  role,
  first_name,
  last_name,
  email,
  landline,
  gender,
  designation,
  updated_by
) => {
  const hashedPaasword = await bcrypt.hash("123", 10);
  try {
    const response = await userManangementModel.addUser(
      mobile_number,
      hashedPaasword,
      role,
      first_name,
      last_name,
      email,
      landline,
      gender,
      designation,
      updated_by
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

const updateUser = async (
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
) => {
  try {
    const response = await userManangementModel.updateUser(
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
