const mysql = require("mysql2");
require("dotenv").config();
// Create a SQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Wqq20020910!",
  database: "project"
});
// Check if the connection is successful
connection.connect(error => {
  if (error) throw error;
  console.log("Connected to MySQL server");
});
/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback databaseCallback
 * @param {Error} err - error if the database call failed
 * @param {Array} results - array of results from the requested query
 */

module.exports = connection;