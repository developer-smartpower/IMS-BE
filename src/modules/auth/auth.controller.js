const responseHandler = require("../../utils/ResponseHandler");
const authService = require("./auth.service");

const signIn = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await authService.signIn();
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

const signUp = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await authService.signUp();
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

const signOut = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await authService.signOut();
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

const getProfileDetails = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await authService.getProfileDetails();
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

const getTokens = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await authService.getTokens();
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
  getTokens,
};
