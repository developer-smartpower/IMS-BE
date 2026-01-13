const db = require("../../config/db");

// CREATE
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
  status,
  updated_by
) => {
  const query = `
    INSERT INTO users (
      mobile_number,
      password,
      role,
      first_name,
      last_name,
      email,
      landline,
      gender,
      designation,
      status,
      updated_by
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
  `;

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
    status,
    updated_by,
  ];

  return db.query(query, values);
};

// READ (LIST)
const getUserList = async () => {
  const query = `
    SELECT user_id, first_name, last_name, designation, mobile_number, role FROM users`;

  const result = await db.query(query);
  return result.rows;
};

// READ (DETAILS)
const getUserDetails = async (user_id) => {
  const query = `
    SELECT
      mobile_number,
      role,
      first_name,
      last_name,
      email,
      landline,
      gender,
      designation,
      status,
      updated_by
    FROM users
    WHERE user_id = $1
  `;

  const result = await db.query(query, [user_id]);
  return result.rows[0];
};

// UPDATE
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
  status,
  updated_by
) => {
  const query = `
    UPDATE users
    SET
      mobile_number = $2,
      role = $3,
      first_name = $4,
      last_name = $5,
      email = $6,
      landline = $7,
      gender = $8,
      designation = $9,
      status = $10,
      updated_by = $11,
      updated_at = NOW()
    WHERE user_id = $1
  `;

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
    status,
    updated_by,
  ];

  return db.query(query, values);
};

module.exports = {
  addUser,
  getUserList,
  getUserDetails,
  updateUser,
};
