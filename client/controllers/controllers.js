const axios = require('axios');

var getProductIdFromPath = () => {
  var url = window.location.pathname;
  var result = url.split('/');
  var id = result[3];
  return id;
}


module.exports = {
  displayReviews: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/allReviews')
  },
  sortByHighestRating: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviewsByHighestRating')
  },
  sortByLowestRating: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviewsByLowestRating')
  },
  sortByNewest: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviewsByNewest')
  },
  sortByOldest: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviewsByOldest')
  },
  sortByMostHelpful: () => {
    return axios.get('/api/products/' + getProductIdFromPath() + '/reviewsByMostHelpful')
  }
}