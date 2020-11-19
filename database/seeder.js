const mysql = require('mysql');
const mysqlConfig = require('./config.js')
const faker = require('faker')

const connection = mysql.createConnection(mysqlConfig);


// var batchUsersRows = [];
// for (var i = 0; i < 100; i++) {
//   var username = faker.internet.userName()
//   var age = faker.random.number({min: 14, max: 109});
//   var eyeColor = faker.vehicle.color()
//   var hairColor = faker.vehicle.color()
//   var skinTone = faker.vehicle.color()
//   var userRow = [username, age, eyeColor, hairColor, skinTone]
//   batchUsersRows.push(userRow)
// }

var batchReviewsRows = [];
for (var i = 0; i < 100; i++) {
  var product_id = faker.random.number({min: 0, max: 9})
  var stars = faker.random.number({min:1, max: 5})
  var subject = faker.lorem.words()
  var text = faker.lorem.sentences()
  var helpful = faker.random.number({min: 0, max: 50})
  var notHelpful = faker.random.number({min: 0, max: 50})
  var recommends = faker.random.boolean()
  var username = faker.internet.userName()
  var age = faker.random.number({min: 14, max: 109});
  var eyeColor = faker.vehicle.color()
  var hairColor = faker.vehicle.color()
  var skinTone = faker.vehicle.color()
  var reviewRow = [product_id, stars, subject, text, helpful, notHelpful, recommends, username, age, eyeColor, hairColor, skinTone]
  batchReviewsRows.push(reviewRow)
}

// var usersSql = "INSERT INTO Users (username, age, eye_color, hair_color, skin_tone) VALUES ?";
// var usersValues = [batchUsersRows]


// connection.query(usersSql, usersValues, function(err) {
//     if (err) throw err;
// });

var reviewsSql = "INSERT INTO Reviews (product_id, stars, subject, text, helpful, not_helpful, recommends, username, age, eye_color, hair_color, skin_tone) VALUES ?";
var reviewsValues = [batchReviewsRows]

connection.query(reviewsSql, reviewsValues, function(err) {
  if (err) throw err;
  connection.end();
});
