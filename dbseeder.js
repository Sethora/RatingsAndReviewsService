// const faker = require("faker");
// const Seeder = require("mysql-db-seed").Seeder;

// const seed = new Seeder(
//   10,
//   "localhost", //?????
//   "root,
//   "HackReactormysql12345",
//   "reviews"
// );

// (async () => {
//   await seed.seed(
//     100,
//     "users",
//     {
//       id: faker.internet.email,
//       username: faker.image.people,
//       age: faker.name.firstName,
//       eye_color: faker.name.lastName,
//       hair_color: faker.random.uuid,
//       skin_tone: seed.nativeTimestamp(),
//       skin_type: seed.nativeTimestamp()
//     },
//     100,
//     "reviews",
//     {
//       id:
//       stars:
//       subject:
//       text:
//       helpful:
//       not_helpful:
//       recommends:
//       user_id:
//     }
//   )
//   seed.exit();
//   process.exit();
// })();


// var batchUsersRow = [];
// for (var i = 0; i < 100; i++) {
//   var username = faker.name
//   var age = faker.number
//   var eyeColor = faker.color
//   var hairColor = faker.
//   var skinTone = faker.
//   var skinType = faker.
//   var userRow = [username, age, eyeColor, hairColor, skinTone, skinType, userRow]
//   batchUsersRows.push(userRow)
// }

// var batchReviewsRow = [];
// for (var i = 0; i < 100; i++) {
//   var stars = faker.name
//   var subject = faker.number
//   var text = faker.color
//   var helpful = faker.
//   var notHelpful = faker.
//   var recommends = faker.
//   var user_id = //FOREIGN KEY WHAT TO DO???
//   var userRow = [username, age, eyeColor, hairColor, skinTone, skinType, userRow]
//   batchReviewsRows.push(userRow)
// }

// var usersSql = "INSERT INTO users (name, email, n) VALUES ?";
// var values = [batchUsersRow]

// ];
// conn.query(usersSql, [values], function(err) {
//     if (err) throw err;
//     conn.end();
// });
