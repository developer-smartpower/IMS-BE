const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../helpers/generateTokens");
const AppError = require("../../utils/AppError");
const authModel = require("./auth.model");
const bcrypt = require("bcrypt");

const signIn = async (username, password) => {
  try {
    const user = await authModel.checkUserExists(username);
    if (user) {
      const hashedpassword = user.password;
      const isPasswordCorrect = await bcrypt.compare(password, hashedpassword);

      if (isPasswordCorrect) {
        const access_token = generateAccessToken(user.user_id);
        const refresh_token = generateRefreshToken(user.user_id);

        await authModel.storeRefreshToken(user.user_id, refresh_token);

        const response = {
          access_token,
          refresh_token,
        };
        return response;
      }
      throw new AppError("Wrong password");
    }
    throw new AppError("user not exists");
  } catch (err) {
    console.log("akjsdlkajsdlkjsadlkjs", err);
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const signUp = async (fullname, username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await authModel.signUp(fullname, username, hashedPassword);
  } catch (err) {
    throw new AppError();
  }
};

const signOut = async (user_id) => {
  try {
    return await authModel.clearToken(user_id);
  } catch (err) {
    throw new AppError();
  }
};

const getProfileDetails = async (user_id) => {
  try {
    const response = await authModel.getProfileDetails(user_id);

    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const getNewTokens = async (user_id, refresh_token) => {
  try {
    const current_refresh_token = await authModel.getCurrentRefreshToken(
      user_id
    );
    if (refresh_token === current_refresh_token) {
      const response = {};
      return response;
    }
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
  getNewTokens,
};
