const db = require("../../config/db");

const addProduct = async (
  product_name,
  code_name,
  description,
  manufacturer,
  supplier_id,
  status,
  updated_by
) => {
  const query = `
    INSERT INTO products
    (
      product_name,
      code_name,
      description,
      manufacturer,
      supplier_id,
      status,
      updated_by
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;

  const values = [
    product_name,
    code_name,
    description,
    manufacturer,
    supplier_id,
    status,
    updated_by,
  ];

  return await db.query(query, values);
};

const updateProductDetails = async (
  product_id,
  product_name,
  code_name,
  description,
  manufacturer,
  supplier_id,
  status,
  user_id
) => {
  const query =
    "UPDATE products SET product_name = $2, code_name = $3, description = $4, manufacturer = $5 , supplier_id = $6,  status = $7, updated_by = $8 WHERE product_id = $1";
  const values = [
    product_id,
    product_name,
    code_name,
    description,
    manufacturer,
    supplier_id,
    status,
    user_id,
  ];
  return await db.query(query, values);
};

const getProductDetails = async (product_id) => {
  const query = "SELECT * FROM products WHERE product_id = $1";
  const values = [product_id];

  const response = await db.query(query, values);
  return response.rows[0];
};

const getProductList = async () => {
  const query =
    "SELECT product_id, product_name, description, manufacturer, supplier_id, code_name FROM products";
  const response = await db.query(query);
  return response.rows;
};

const getProductLookUp = async () => {
  const query = `SELECT product_id AS value, product_name AS label FROM products ORDER BY product_name`;
  const response = await db.query(query);
  return response.rows;
};

module.exports = {
  addProduct,
  updateProductDetails,
  getProductDetails,
  getProductList,
  getProductLookUp,
};
