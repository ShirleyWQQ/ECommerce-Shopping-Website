const sql = require("./sql");

// Product class that helps handle data within product table
module.exports = class Product {
  /**
   * Retrieve all records in the product table
   * @param {databaseCallback} callback 
   */
  static getAll(options, callback) {
    let query = "SELECT * FROM product ";
    let insert = [];
    if (options?.filter?.rating) {
      query += "WHERE product_rating > ?";
      insert = [options.filter.rating];
    } else if (options?.sort?.price) {
      query += "ORDER BY price ASC"
    }
    query += ";"
    sql.execute
    sql.execute(query, insert, (err, results, fields) => {
      if (err) console.error(err);
      console.log(`Selected ${results.length} rows`);
      callback(err, results);
    });
  }
  static getById(product_id, callback) {
    const query = "SELECT * FROM Product WHERE product_id = ?";
    const insert = [product_id];
    sql.execute(query, insert, (err, results) => {
      if (err) console.error(err);
      callback(err, results);
    })
  }
  static deleteById(product_id, callback) {
    const query = "DELETE FROM Product WHERE product_id = ?";
    const insert = [product_id];
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
