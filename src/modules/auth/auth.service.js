const AppError = require("../../utils/AppError");
const authModel = require("./auth.model");

const signIn = async () => {
  try {
    const response = await authModel.signIn();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const signUp = async () => {
  try {
    const response = await authModel.signUp();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const signOut = async () => {
  try {
    const response = await authModel.signOut();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const getProfileDetails = async () => {
  try {
    const response = await authModel.getProfileDetails();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const getTokens = async () => {
  try {
    const response = await authModel.getTokens();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

module.exports = {
  signIn,
  signUp,
  signOut,
  getProfileDetails,
  getTokens,
};
