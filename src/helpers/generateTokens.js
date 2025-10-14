const jwt = require("jsonwebtoken");

const generateAccessToken = (user_id) => {
  return jwt.sign({ user_id }, "ims_access", { expiresIn: "7d" });
};

const generateRefreshToken = (user_id) => {
  return jwt.sign({ user_id }, "ims_refresh", { expiresIn: "7d" });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
