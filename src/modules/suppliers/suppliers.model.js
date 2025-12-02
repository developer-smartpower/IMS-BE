const db = require("../../config/db");

const addSupplier = async (
  email,
  address,
  partnership,
  spoc_name,
  company_name,
  mobile_number,
  landline,
  updated_by
) => {
  const query =
    "INSERT INTO suppliers (email, address, partnership, spoc_name, company_name, mobile_number, landline, updated_by ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
  const values = [
    email,
    address,
    partnership,
    spoc_name,
    company_name,
    mobile_number,
    landline,
    updated_by,
  ];

  return await db.query(query, values);
};
const getSupplierList = async () => {
  const query = "SELECT * FROM suppliers";
  const values = [];

  const results = await db.query(query, values);
  return results.rows;
};

const getSupplierDetails = async (supplier_id) => {
  const query = "SELECT * FROM suppliers WHERE supplier_id = $1";
  const values = [supplier_id];

  const results = await db.query(query, values);
  return results.rows[0];
};

const updateSupplierDetails = async (supplier_id) => {
  const query = "";
  const values = [];

  const results = await db.query(query, values);
  return results;
};

module.exports = {
  addSupplier,
  getSupplierList,
  getSupplierDetails,
  updateSupplierDetails,
};
