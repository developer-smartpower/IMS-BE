const db = require("../../config/db");

const addPurchase = async (
  supplier_id,
  updated_by,
  invoice_number,
  invoice_date,
  purchase_date,
  total_amount,
  notes
) => {
  const query =
    "INSERT INTO purchases (supplier_id, updated_by, invoice_number, invoice_date, purchase_date,  total_amount, notes) VALUES ($1, $2, $3, $4, $5, $6, $7)";
  const values = [
    supplier_id,
    updated_by,
    invoice_number,
    invoice_date,
    purchase_date,
    total_amount,
    notes,
  ];

  return await db.query(query, values);
};

const getPurchaseList = async () => {
  const query = "SELECT * FROM purchases";

  const results = await db.query(query);
  return results.rows;
};

const getPurchaseDetails = async (purchase_id) => {
  const query = "SELECT * FROM purchases WHERE purchase_id = $1";
  const values = [purchase_id];

  const results = await db.query(query, values);
  return results.rows[0];
};

const updatePurchaseDetails = async (
  purchase_id,
  supplier_id,
  user_id,
  invoice_number,
  invoice_date,
  purchase_date,
  total_amount,
  notes
) => {
  const query =
    "UPDATE purchases SET supplier_id = $2, updated_by = $3, invoice_number = $4, invoice_date = $5, purchase_date = $6, total_amount = $7, notes = $8 WHERE purchase_id = $1";
  const values = [
    purchase_id,
    supplier_id,
    user_id,
    invoice_number,
    invoice_date,
    purchase_date,
    total_amount,
    notes,
  ];

  const results = await db.query(query, values);
  return results;
};

module.exports = {
  addPurchase,
  getPurchaseDetails,
  updatePurchaseDetails,
  getPurchaseList,
};
