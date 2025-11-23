const db = require("../../config/db");

const addSupplier = async (
  name,
  mobile_number,
  email,
  address,
  partnership
) => {
  const query =
    "INSERT INTO suppliers (supplier_name, mobile_number, email, address, partnership ) VALUES ($1, $2, $3, $4, $5)";
  const values = [name, mobile_number, email, address, partnership];

  return await db.query(query, values);
};
const getSupplierList = async () => {
  const query = "SELECT * FROM suppliers";
  const values = [];

  const response = await db.query(query, values);
  return response.rows;
};

const getSupplierDetails = async (supplier_id) => {
  const query = "SELECT * FROM suppliers WHERE supplier_id = $1";
  const values = [supplier_id];

  const response = await db.query(query, values);
  return response.rows[0];
};

const updateSupplierDetails = async (supplier_id) => {
  const query = "";
  const values = [];

  const response = await db.query(query, values);
  return response;
};

module.exports = {
  addSupplier,
  getSupplierList,
  getSupplierDetails,
  updateSupplierDetails,
};
