const express = require("express");
const app = express();
const path = require('path')
const db = require('../database')
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use('/products/:id/reviews', (req, res) => {
//   console.log('confused')
// })

// app.use('/api/products/:id/reviews', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist'));
// })

// app.get('/api/products/:id/users', (req, res) => {
//   db.getAllUsers()
//     .then((users) => {
//       res.send(users)
//     })
// })

app.get('/api/products/:id/reviews', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

app.get('/api/products/:id/reviews/allReviews', (req, res) => {
  db.getAllReviews(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.get('/api/products/:id/reviews/reviewsByHighestRating', (req, res) => {
  db.sortByHighestRating(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.get('/api/products/:id/reviews/reviewsByLowestRating', (req, res) => {
  db.sortByLowestRating(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.get('/api/products/:id/reviews/reviewsByNewest', (req, res) => {
  db.sortByNewest(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.get('/api/products/:id/reviews/reviewsByOldest', (req, res) => {
  db.sortByOldest(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.get('/api/products/:id/reviews/reviewsByMostHelpful', (req, res) => {
  db.sortByMostHelpful(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

module.exports = app;