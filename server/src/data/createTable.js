const pool = require("../config/db.js");

const createUserTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(50) DEFAULT 'sales_rep',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

  try {
    pool.query(queryText);
    console.log("user table created");
  } catch (error) {
    console.log("Error User employees table:", error);
  }
};

const createLeadTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    status VARCHAR(50) DEFAULT 'new', 
    source VARCHAR(100),               
    assigned_to INT REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

  try {
    pool.query(queryText);
    console.log("Lead table created");
  } catch (error) {
    console.log("Error creating Lead tables:", error);
  }
};
module.exports = { createUserTable, createLeadTable };
