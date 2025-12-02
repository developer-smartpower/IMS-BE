const db = require("../../config/db");

const addProduct = async (
  description,
  name,
  manufacturer,
  supplier_id,
  code_name,
  updated_by
) => {
  const query =
    "INSERT INTO products (description, name, manufacturer, supplier_id, code_name, updated_by) VALUES ($1, $2, $3, $4, $5, $6)";
  const values = [
    description,
    name,
    manufacturer,
    supplier_id,
    code_name,
    updated_by,
  ];

  return await db.query(query, values);
};

const updateProductDetails = async () => {
  const query = "";
  const values = [];

  const response = await db.query(query, values);
  return response;
};
const getProductDetails = async (product_id) => {
  const query = "SELECT * FROM products WHERE product_id = $1";
  const values = [product_id];

  const response = await db.query(query, values);
  return response.rows[0];
};

const deleteProduct = async (product_id) => {
  const query = "DELETE FROM products WHERE product_id = $1";
  const values = [product_id];

  const response = await db.query(query, values);
  return response;
};

const getProductList = async () => {
  const query = "SELECT * FROM products";
  const values = [];

  const response = await db.query(query, values);
  return response.rows;
};

module.exports = {
  addProduct,
  updateProductDetails,
  getProductDetails,
  deleteProduct,
  getProductList,
};
