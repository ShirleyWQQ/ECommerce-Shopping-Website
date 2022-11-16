const sql = require("./sql");

// Product class that helps handle data within product table

module.exports = class Comment {
  /**
   * Retrieve all records in the product table
   * @param {databaseCallback} callback 
   */
  static getByProductId(product_id, callback) {
    const query = "SELECT * FROM Comment NATURAL JOIN (SELECT user_id, user_name FROM User) as T WHERE product_id = ?;";
    const insert = [product_id];
    sql.execute(query, insert, (err, results) => {
      if (err) console.error(err); 
      callback(err, results);
    })
  }
  static getByUserId(user_id, callback) {
    const query = "SELECT * FROM Comment WHERE user_id = ?";
    const insert = [user_id];
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
 * @param {Product[]} results - array of results from the requested query
 */
