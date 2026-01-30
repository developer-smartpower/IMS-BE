const db = require("../../config/db");

const addPurchase = async (
  supplier_id,
  invoice_number,
  invoice_date,
  purchase_date,
  total_amount,
  notes,
  updated_by
) => {
  const query = `
    INSERT INTO purchases
    (supplier_id, invoice_number, invoice_date, purchase_date, total_amount, notes, updated_by)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING purchase_id
  `;

  const values = [
    supplier_id,
    invoice_number,
    invoice_date,
    purchase_date,
    total_amount,
    notes,
    updated_by,
  ];

  const results = await db.query(query, values);
  return results.rows[0];
};

const getPurchaseList = async () => {
  const query =
    "SELECT purchase_id, invoice_number, invoice_date, purchase_date, total_amount FROM purchases ORDER BY purchase_date DESC";
  const result = await db.query(query);
  return result.rows;
};

const getPurchaseDetails = async (purchase_id) => {
  const query = `
    SELECT
      p.supplier_id,
      p.invoice_number,
      p.invoice_date,
      p.purchase_date,
      p.total_amount,
      p.notes,
      json_agg(
        json_build_object(
          'purchase_item_id', pt.purchase_item_id,
          'product_id', pt.product_id,
          'quantity', pt.quantity,
          'purchase_price', pt.purchase_price
        )
      ) AS product_items
    FROM purchases p
    INNER JOIN purchase_items pt
      ON p.purchase_id = pt.purchase_id
    WHERE p.purchase_id = $1
    GROUP BY p.purchase_id
  `;
  const values = [purchase_id];
  const result = await db.query(query, values);
  return result.rows[0];
};

const updatePurchaseDetails = async (
  purchase_id,
  supplier_id,
  invoice_number,
  invoice_date,
  purchase_date,
  total_amount,
  notes,
  user_id
) => {
  const query = `
    UPDATE purchases
    SET supplier_id = $2,
        invoice_number = $3,
        invoice_date = $4,
        purchase_date = $5,
        total_amount = $6,
        notes = $7,
        updated_by = $8
    WHERE purchase_id = $1
  `;

  const values = [
    purchase_id,
    supplier_id,
    invoice_number,
    invoice_date,
    purchase_date,
    total_amount,
    notes,
    user_id,
  ];

  return db.query(query, values);
};

module.exports = {
  addPurchase,
  getPurchaseList,
  getPurchaseDetails,
  updatePurchaseDetails,
};
