const AppError = require("../../utils/AppError");
const userManagementModel = require("./userManangement.model");
const bcrypt = require("bcrypt");

// CREATE
const addUser = async (
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
) => {
  try {
    const hashedPassword = await bcrypt.hash("123", 10);

    return await userManagementModel.addUser(
      mobile_number,
      hashedPassword,
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
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

// READ (LIST)
const getUserList = async () => {
  try {
    return await userManagementModel.getUserList();
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

// READ (DETAILS)
const getUserDetails = async (user_id) => {
  try {
    return await userManagementModel.getUserDetails(user_id);
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

// UPDATE
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
  status,
  updated_by
) => {
  try {
    return await userManagementModel.updateUser(
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
  } catch (err) {
    console.log("alskjkalsdjklasjd", err);
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

module.exports = {
  addUser,
  getUserList,
  getUserDetails,
  updateUser,
};
