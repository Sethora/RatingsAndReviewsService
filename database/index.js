const mysql = require("mysql");
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllUsers = function(callback) {
  var queryString = "SELECT * from Users;";
  connection.query(queryString, (err, results) => {
    callback(results);
  })
}

const getAllReviews = function(callback) {
  var queryString = "SELECT * from Reviews;";
  connection.query(queryString, (err, results) => {
    callback(results);
  })
}

module.exports = {
  getAllUsers,
  getAllReviews
}