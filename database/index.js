const mysql = require("mysql");
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllUsers = (callback) => {
  var queryString = "SELECT * from Users;";
  connection.query(queryString, (err, results) => {
    callback(results);
  })
}

const getAllReviews = (callback) => {
  var queryString = "SELECT * from Reviews;";
  connection.query(queryString, (err, results) => {
    callback(results);
  })
}

//const getAllStars

module.exports = {
  getAllUsers,
  getAllReviews
}