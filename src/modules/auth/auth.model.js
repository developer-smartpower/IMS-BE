const db = require("../../config/db");

const checkUserExists = async (username) => {
  const query = "SELECT user_id, password FROM users WHERE username = $1";
  const values = [username];

  const response = await db.query(query, values);
  return response.rows[0];
};

const signUp = async (fullname, username, hashedPassword) => {
  const query =
    "INSERT INTO users (fullname, username, password) VALUES ($1, $2, $3)";
  const values = [fullname, username, hashedPassword];

  return await db.query(query, values);
};

const storeRefreshToken = async (user_id, token) => {
  console.log("klhasdkasjldkj", user_id, token);
  const query =
    "INSERT INTO refresh_token (user_id, token) VALUES ($1, $2) ON CONFLICT(user_id) DO UPDATE SET token = EXCLUDED.token";
  const values = [user_id, token];

  return await db.query(query, values);
};

const clearToken = async (user_id) => {
  const query = "DELETE FROM refresh_tokens WHERE user_id = $1";
  const values = [user_id];

  return await db.query(query, values);
};

const getProfileDetails = async (user_id) => {
  const query = "SELECT * FROM users WHERE user_id = $1";
  const values = [user_id];

  const response = await db.query(query, values);

  return response.rows[0];
};

const getCurrentRefreshToken = async (user_id) => {
  const query = "DELETE token FROM refresh_token WHERE user_id = $1";
  const values = [user_id];

  const response = await db.query(query, values);
  return response.rows[0];
};

module.exports = {
  checkUserExists,
  storeRefreshToken,
  clearToken,
  signUp,
  getProfileDetails,
  getCurrentRefreshToken,
};
