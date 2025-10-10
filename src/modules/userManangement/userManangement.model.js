const db = require("../../config/db");

const addUser = async (name, address, mobile_number, user_name, password) => {
  const query =
    "INSERT INTO user (name, address, mobile_number, user_name, password) VALUES ($1, $2, $3, $4, $5)";
  const values = [name, address, mobile_number, user_name, password];

  return await db.query(query, values);
};

const getUserList = async () => {
  const query = "SELECT * FROM users";
  const values = [];

  const response = await db.query(query, values);
  return response.rows[0];
};

const viewUserDetails = async (user_id) => {
  const query = "SELECT * FROM users WHERE user_id = $1";
  const values = [user_id];

  const response = await db.query(query, values);
  return response.rows[0];
};

const updateUser = async (user_id) => {
  const query = "";
  const values = [];

  return await db.query(query, values);
};

module.exports = {
  addUser,
  getUserList,
  viewUserDetails,
  updateUser,
};
