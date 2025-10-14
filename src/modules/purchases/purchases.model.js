const db = require("../../config/db");

const addPurchase = async () => {
  const query = "";
  const values = [];

  const response = await db.query(query, values);
  return response;
};

const getPurchaseDetails = async () => {
  const query = "";
  const values = [];

  const response = await db.query(query, values);
  return response;
};

const updatePurchaseDetails = async () => {
  const query = "";
  const values = [];

  const response = await db.query(query, values);
  return response;
};

const getPurchaseList = async () => {
  const query = "";
  const values = [];

  const response = await db.query(query, values);
  return response;
};

const deletePurchaseItem = async () => {
  const query = "";
  const values = [];

  const response = await db.query(query, values);
  return response;
};

module.exports = {
  addPurchase,
  getPurchaseDetails,
  updatePurchaseDetails,
  getPurchaseList,
  deletePurchaseItem,
};
