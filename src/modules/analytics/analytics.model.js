const db = require("../../config/db");

const signUp = async () => {
  const query = "";
  const values = [];

  const response = await db.query(query, values);
  return response;
};

module.exports = {
  signIn,
  signUp,
  signOut,
  getProfileDetails,
  getTokens,
};
