// const mysql = require("mysql");
// const mysqlConfig = require('./config.js');

// const connection = mysql.createConnection(mysqlConfig);

// const getAllUsers = (callback) => {
//   var queryString = "SELECT * from Users;";
//   connection.query(queryString, (err, results) => {
//     callback(results);
//   })
// }

// const getAllReviews = (callback) => {
//   var queryString = "SELECT * from Reviews;";
//   connection.query(queryString, (err, results) => {
//     callback(results);
//   })
// }

// //const getAllStars

// module.exports = {
//   getAllUsers,
//   getAllReviews
// }

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'reviews',
  username: 'root',
  password: 'HackReactormysql12345',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

sequelize.authenticate()
  .then(() => console.log('DB successfully connected'))
  .catch((err) => console.log('DB connection NOT successful.' + err))

const Users = sequelize.define('Users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  eye_color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hair_color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  skin_tone: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Reviews = sequelize.define('Reviews', {
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  helpful: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  not_helpful: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  recommends: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = {
  getAllUsers: () => {
    return Users.findAll()
  },
  getAllReviews: () => {
    return Reviews.findAll()
  }
}