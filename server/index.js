const express = require("express");
const app = express();
const port = 3321;
const path = require('path')
const db = require('../database')

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/products/:id/users', (req, res) => {
  db.getAllUsers()
    .then((users) => {
      res.send(users)
    })
})

app.get('/api/products/:id/reviews', (req, res) => {
  db.getAllReviews(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.get('/api/products/:id/reviewsByHighestRating', (req, res) => {
  db.sortByHighestRating(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.get('/api/products/:id/reviewsByLowestRating', (req, res) => {
  db.sortByLowestRating(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.get('/api/products/:id/reviewsByNewest', (req, res) => {
  db.sortByNewest(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.get('/api/products/:id/reviewsByOldest', (req, res) => {
  db.sortByOldest(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.get('/api/products/:id/reviewsByMostHelpful', (req, res) => {
  db.sortByMostHelpful(req.params.id)
    .then((reviews) => {
      res.send(reviews)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))