const axios = require('axios');

var getProductIdFromPath = () => {
  var url = window.location.pathname;
  var result = url.split('/');
  var id = result[2];
  return id;
}


module.exports = {
  displayReviews: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviews/allReviews')
  },
  sortByHighestRating: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviews/reviewsByHighestRating')
  },
  sortByLowestRating: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviews/reviewsByLowestRating')
  },
  sortByNewest: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviews/reviewsByNewest')
  },
  sortByOldest: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviews/reviewsByOldest')
  },
  sortByMostHelpful: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviews/reviewsByMostHelpful')
  }
}