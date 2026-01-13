const db = require("../../config/db");

const addSupplier = async (
  company_name,
  partnership,
  address,
  spoc_name,
  email,
  mobile_number,
  landline,
  status,
  updated_by
) => {
  const query = `
    INSERT INTO suppliers
    (
      company_name,
      partnership,
      address,
      spoc_name,
      email,
      mobile_number,
      landline,
      status,
      updated_by
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING supplier_id
  `;

  const values = [
    company_name,
    partnership,
    address,
    spoc_name,
    email,
    mobile_number,
    landline,
    status,
    updated_by,
  ];

  return db.query(query, values);
};

const getSupplierList = async () => {
  const query = `
    SELECT
      supplier_id,
      company_name,
      partnership,
      address,
      spoc_name,
      status
    FROM suppliers
    ORDER BY supplier_id DESC
  `;

  const results = await db.query(query);
  return results.rows;
};

const getSupplierDetails = async (supplier_id) => {
  const query = `
    SELECT
      s.company_name,
      s.partnership,
      s.address,
      s.email,
      s.spoc_name,
      s.mobile_number,
      s.landline,
      s.status,
      s.updated_at,
      CONCAT(u.first_name, ' ', u.last_name) AS updated_by
    FROM suppliers s
    INNER JOIN users u
      ON s.updated_by = u.user_id
    WHERE s.supplier_id = $1
  `;

  const results = await db.query(query, [supplier_id]);
  return results.rows[0];
};

const updateSupplierDetails = async (
  supplier_id,
  company_name,
  partnership,
  address,
  spoc_name,
  email,
  mobile_number,
  landline,
  status,
  updated_by
) => {
  console.log(
    "ahsdkjhasdkjahsjkd",
    supplier_id,
    company_name,
    partnership,
    address,
    spoc_name,
    email,
    mobile_number,
    landline,
    status,
    updated_by
  );

  const query = `
    UPDATE suppliers
    SET
      company_name = $2,
      partnership = $3,
      address = $4,
      spoc_name = $5,
      email = $6,
      mobile_number = $7,
      landline = $8,
      status = $9,
      updated_by = $10
    WHERE supplier_id = $1
  `;

  const values = [
    supplier_id,
    company_name,
    partnership,
    address,
    spoc_name,
    email,
    mobile_number,
    landline,
    status,
    updated_by,
  ];

  return db.query(query, values);
};

const getSupplierLookUp = async () => {
  const query = `
    SELECT
      supplier_id AS value,
      company_name AS label
    FROM suppliers
    ORDER BY company_name
  `;

  const response = await db.query(query);
  return response.rows;
};

module.exports = {
  addSupplier,
  getSupplierList,
  getSupplierDetails,
  updateSupplierDetails,
  getSupplierLookUp,
};
