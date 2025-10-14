const responseHandler = require("../../utils/ResponseHandler");
const authService = require("./auth.service");

const signIn = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const response = await authService.signIn(username, password);
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

const signUp = async (req, res, next) => {
  const { fullname, username, password } = req.body;
  try {
    await authService.signUp(fullname, username, password);
    responseHandler(res, {}, "success", 200);
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
  console.log("kjahskjhsadjkhs", req);
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

module.exports = {
  signIn,
  signUp,
  signOut,
  getProfileDetails,
  getNewTokens,
};
