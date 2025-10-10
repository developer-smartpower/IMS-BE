const { Pool } = require("pg");

const db = new Pool({
  port: 5432,
  host: "localhost",
  database: "ims",
  user: "postgres",
  password: "shan",
});

db.connect()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error in connecting the database", err));

module.exports = db;
