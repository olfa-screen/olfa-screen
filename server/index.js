const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path")
const pool= require("./db");
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

// ROUTES
// get a test from screen id
app.get("/test/:id", async (req, res) => {
  try {
    const { id } = req.params
    const test = await pool.query("SELECT * FROM screen_ids WHERE screen_id = $1", [id]);
    res.json(tests.rows[0])
  } catch (err) {
    console.error('error: ', err.message)
  }
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
}); 