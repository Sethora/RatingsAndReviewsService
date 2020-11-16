const db = require('./index.js')

module.exports = {
  getAllUsers: () => {
    return db.findAll()
  },
  getAllReviews: () => {
    return db.findAll()
  }
}