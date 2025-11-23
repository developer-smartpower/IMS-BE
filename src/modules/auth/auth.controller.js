const responseHandler = require("../../utils/ResponseHandler");
const authService = require("./auth.service");

const signIn = async (req, res, next) => {
  const { mobile_number, password, device_id } = req.body;
  try {
    const response = await authService.signIn(
      mobile_number,
      password,
      device_id
    );
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

const signOut = async (req, res, next) => {
  const { user_id } = req;
  try {
    await authService.signOut(user_id);
    responseHandler(res, {}, "success", 200);
  } catch (err) {
    next(err);
  }
};

const getProfileDetails = async (req, res, next) => {
  const { user_id } = req;
  try {
    const response = await authService.getProfileDetails(user_id);
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

const getNewTokens = async (req, res, next) => {
  const { refresh_token } = req.body;
  const { user_id } = req;

  try {
    const response = await authService.getNewTokens(user_id, refresh_token);
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

const forgotPassword = async (req, res, next) => {
  const { user_id } = req;

  try {
    await authService.forgotPassword(user_id);
    responseHandler(res, {}, "success", 200);
  } catch (err) {
    next(err);
  }
};

const resetPassword = async (req, res, next) => {
  const { user_id } = req;
  const { old_password, new_password } = req.body;

  try {
    await authService.resetPassword(user_id, old_password, new_password);
    responseHandler(res, {}, "success", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signIn,
  forgotPassword,
  resetPassword,
  signOut,
  getProfileDetails,
  getNewTokens,
};
