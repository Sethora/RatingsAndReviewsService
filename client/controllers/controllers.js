const axios = require('axios');

var random = Math.floor(Math.random() * 10)

module.exports = {
  displayUsers: () => {
    return axios.get('/api/products/:id/users')
  },
  displayReviews: () => {
    return axios.get('/api/products/' + random + '/reviews')
  },
  sortByHighestRating: () => {
    return axios.get('/api/products/' + random + '/reviewsByHighestRating')
  },
  sortByLowestRating: () => {
    return axios.get('/api/products/' + random + '/reviewsByLowestRating')
  },
  sortByNewest: () => {
    return axios.get('/api/products/' + random + '/reviewsByNewest')
  },
  sortByOldest: () => {
    return axios.get('/api/products/' + random + '/reviewsByOldest')
  },
  sortByMostHelpful: () => {
    return axios.get('/api/products/' + random + '/reviewsByMostHelpful')
  }
}