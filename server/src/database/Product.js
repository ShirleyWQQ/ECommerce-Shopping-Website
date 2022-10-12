const sql = require("./sql");

// Product class that helps handle data within product table
class Product {
  /**
   * Retrieve all records in the product table
   * @param {databaseCallback} callback 
   */
  static getAll(callback) {
    sql.execute("select * from product;", (err, results, fields) => {
      if (err) console.err(err);
      console.log(`Selected ${results.length} rows`);
      callback(err, results);
    });
  }
}

module.exports = Product;
/**
 * Callback to handle database results
 * @callback databaseCallback
 * @param {Error} err - error if the database call failed
 * @param {Product[]} results - array of results from the requested query
 */
