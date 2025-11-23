const db = require("../../config/db");

const checkUserExists = async (mobile_number) => {
  const query =
    "SELECT user_id, password, fullname FROM users WHERE mobile_number = $1";
  const values = [mobile_number];

  const response = await db.query(query, values);
  return response.rows[0];
};

const storeRefreshToken = async (user_id, token, device_id) => {
  const query =
    "INSERT INTO refresh_tokens (user_id, token) VALUES ($1, $2) ON CONFLICT(user_id) DO UPDATE SET token = EXCLUDED.token";
  const values = [user_id, token];

  return await db.query(query, values);
};

const clearToken = async (user_id) => {
  const query = "DELETE FROM refresh_tokens WHERE user_id = $1";
  const values = [user_id];

  const result = await db.query(query, values);
  return;
};

const getProfileDetails = async (user_id) => {
  const query = "SELECT * FROM users WHERE user_id = $1";
  const values = [user_id];

  const response = await db.query(query, values);

  return response.rows[0];
};

const getCurrentRefreshToken = async (user_id) => {
  const query = "DELETE token FROM refresh_tokens WHERE user_id = $1";
  const values = [user_id];

  const response = await db.query(query, values);
  return response.rows[0];
};

const checkPasswordCorrect = async (user_id) => {
  const query = "SELECT * FROM users WHERE user_id = $1";
  const values = [user_id];

  const results = await db.query(query, values);
  return results.rows[0];
};

const updateNewPassword = async (user_id, password) => {
  const query = "UPDATE users SET password = $1 WHERE user_id = $2";
  const values = [password, user_id];

  await db.query(query, values);
};

module.exports = {
  checkUserExists,
  storeRefreshToken,
  clearToken,
  getProfileDetails,
  getCurrentRefreshToken,
  checkPasswordCorrect,
  updateNewPassword,
};
