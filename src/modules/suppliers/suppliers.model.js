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

const updateSupplierDetails = async (
  supplier_id,
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
    "UPDATE suppliers SET email = $2, address = $3, partnership = $4, spoc_name = $5, company_name = $6, mobile_number = $7, landline = $8, updated_by = $9 WHERE supplier_id = $1";
  const values = [
    supplier_id,
    email,
    address,
    partnership,
    spoc_name,
    company_name,
    mobile_number,
    landline,
    updated_by,
  ];

  const results = await db.query(query, values);
  return results;
};

const deActivateSupplier = async (supplier_id, status, updated_by) => {
  const query =
    "UPDATE suppliers SET status = $2, updated_by = $3  WHERE supplier_id = $1";
  const values = [supplier_id, status, updated_by];

  const results = await db.query(query, values);
  return results;
};

const getSupplierLookUp = async () => {
  const query =
    "SELECT supplier_id as data, company_name as label FROM suppliers";

  const response = await db.query(query);
  return response.rows;
};

module.exports = {
  addSupplier,
  getSupplierList,
  getSupplierDetails,
  updateSupplierDetails,
  deActivateSupplier,
  getSupplierLookUp,
};
