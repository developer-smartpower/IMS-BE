const db = require("../../config/db");

const addPurchaseItem = async (
  purchase_id,
  product_id,
  quantity,
  purchase_price,
  updated_by
) => {
  const query = `
    INSERT INTO purchase_items
    (purchase_id, product_id, quantity, purchase_price, updated_by)
    VALUES ($1, $2, $3, $4, $5)
  `;

  const values = [
    purchase_id,
    product_id,
    quantity,
    purchase_price,
    updated_by,
  ];
  return db.query(query, values);
};

const updatePurchaseItemDetails = async (
  purchase_item_id,
  product_id,
  quantity,
  purchase_price,
  updated_by
) => {
  const query = `
    UPDATE purchase_items
    SET product_id = $2,
        quantity = $3,
        purchase_price = $4
    WHERE purchase_item_id = $1
  `;

  const values = [
    purchase_item_id,
    product_id,
    quantity,
    purchase_price,
    updated_by,
  ];

  return db.query(query, values);
};

const deletePurchaseItem = async (purchase_item_id) => {
  const query = `
    DELETE FROM purchase_items
    WHERE purchase_item_id = $1
  `;

  return db.query(query, [purchase_item_id]);
};

module.exports = {
  addPurchaseItem,
  updatePurchaseItemDetails,
  deletePurchaseItem,
};
