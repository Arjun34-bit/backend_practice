const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const createUserTable = require("./data/createTable");
const createLeadTable = require("./data/createTable");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use(helmet());
app.use(morgan("dev"));

// createUserTable();
// createLeadTable();

const PORT = process.env.PORT || 5000;

app.get("/api/", (req, res) => {
  res.send(`API Running Successfully `);
});

// app.use("/api/users");
// app.use("/api/leads");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
