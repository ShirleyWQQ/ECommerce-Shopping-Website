
const User = require("../database/User");
function login(req, res) {
  const { username, password } = req.body;
  User.getUserByName(username, (err, results) => {
    if (err) {
      res.status(500);
      return res.send("Database Error");
    }
    if (results.length === 1 && results[0].password === password) {
      res.status(200);
      const user = results[0];
      delete user.password;
      return res.send(user);
    }
    console.log(results[0]);
    res.status(400);
    return res.send("Failed to login");
  });
};

module.exports = {
  login
};