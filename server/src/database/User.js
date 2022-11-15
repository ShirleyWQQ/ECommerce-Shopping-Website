const sql = require("./sql");

// Product class that helps handle data within product table

module.exports = class User {
  /**
   * Retrieve all records in the product table
   * @param {databaseCallback} callback 
   */
  static getUserByName(username, callback) {
    const query = "SELECT * FROM User  LEFT JOIN Admin ON user_id=admin_id WHERE user_name = ?";
    const insert = [username];
    sql.execute(query, insert, (err, results) => {
      if (err) console.error(err); 
      callback(err, results);
    })
  }
}

/**
 * Callback to handle database results
 * @callback databaseCallback
 * @param {Error} err - error if the database call failed
 * @param {User} results - array of results from the requested query
 */
