const express = require("express");
const app = express();
const port = 3321;
const path = require('path')
const db = require('../database')
const models = require('../database/models.js')

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/products/:id/users', (req, res) => {
  models.getAllUsers()
    .then((users) => {
      res.send(users)
    })
})

app.get('/api/products/:id/reviews', (req, res) => {
  models.getAllReviews()
    .then((reviews) => {
      res.send(reviews)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))