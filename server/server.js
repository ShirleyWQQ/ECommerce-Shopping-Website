const express = require("express");
const cors = require("cors");

// Initialization
const app = express();
const PORT = 3001;

// Common middleware
app.use(cors());
app.use(express.json())

// Routing
app.get("/", (req, res) => {
  res.send("Hello World!")
});
app.get("/status", (req, res) => {
  res.send("Server is running")
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.status(201);
  res.send(req.body.hello);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});