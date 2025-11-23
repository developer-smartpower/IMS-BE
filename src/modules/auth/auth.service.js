const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../helpers/generateTokens");
const AppError = require("../../utils/AppError");
const authModel = require("./auth.model");
const bcrypt = require("bcrypt");

const signIn = async (mobile_number, password, device_id) => {
  try {
    const user = await authModel.checkUserExists(mobile_number);
    if (user) {
      const hashedpassword = user.password;
      const isPasswordCorrect = await bcrypt.compare(password, hashedpassword);

      if (isPasswordCorrect) {
        const access_token = generateAccessToken(user.user_id);
        const refresh_token = generateRefreshToken(user.user_id);
        const user_details = {
          fullname: user.fullname,
          profile_image_url:
            "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
        };

        await authModel.storeRefreshToken(
          user.user_id,
          refresh_token,
          device_id
        );

        const response = {
          access_token,
          refresh_token,
          user_details,
        };
        return response;
      }
      throw new AppError("Wrong password");
    }
    throw new AppError("user not exists");
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
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

const forgotPassword = async (user_id) => {
  try {
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const resetPassword = async (user_id, old_password, new_password) => {
  try {
    const oldPassword = await authModel.checkPasswordCorrect(user_id);
    const isOldPasswordCorrect = await bcrypt.compare(
      old_password,
      oldPassword
    );
    if (isOldPasswordCorrect) {
      const hashedNewPasseord = await bcrypt.hash(new_password, 10);
      await authModel.updateNewPassword(user_id, hashedNewPasseord);
    } else {
      throw new AppError();
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
  forgotPassword,
  resetPassword,
  signOut,
  getProfileDetails,
  getNewTokens,
};
