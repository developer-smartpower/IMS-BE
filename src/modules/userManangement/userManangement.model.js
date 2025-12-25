const db = require("../../config/db");

const addUser = async (
  mobile_number,
  password,
  role,
  first_name,
  last_name,
  email,
  landline,
  gender,
  designation,
  updated_by
) => {
  const query =
    "INSERT INTO users ( mobile_number, password, role, first_name, last_name, email, landline, gender, designation, updated_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
  const values = [
    mobile_number,
    password,
    role,
    first_name,
    last_name,
    email,
    landline,
    gender,
    designation,
    updated_by,
  ];

  return await db.query(query, values);
};

const getUserList = async () => {
  const query =
    "SELECT  mobile_number, role, first_name, last_name, email, landline, gender, designation FROM users";

  const results = await db.query(query);
  return results.rows;
};

const viewUserDetails = async (user_id) => {
  const query =
    "SELECT mobile_number, role, first_name, last_name, email, landline, gender, designation , updated_by FROM users WHERE user_id = $1";
  const values = [user_id];

  const results = await db.query(query, values);
  return results.rows[0];
};

const updateUser = async (
  user_id,
  mobile_number,
  role,
  first_name,
  last_name,
  email,
  landline,
  gender,
  designation,
  created_by
) => {
  const query =
    "UPDATE users SET mobile_number = $2, role = $3, first_name = $4, last_name = $5, email= $6, landline = $7, gender =$8, designation = $9, created_by = $10 WHERE user_id = $1";
  const values = [
    user_id,
    mobile_number,
    role,
    first_name,
    last_name,
    email,
    landline,
    gender,
    designation,
    created_by,
  ];

  return await db.query(query, values);
};

module.exports = {
  addUser,
  getUserList,
  viewUserDetails,
  updateUser,
};
