const axios = require('axios');

module.exports = {
  displayUsers: () => {
    return axios.get('/api/products/:id/users')
  },
  displayReviews: () => {
    return axios.get('/api/products/:id/reviews')
  }
}