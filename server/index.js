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
  db.getAllReviews()
    .then((reviews) => {
      res.send(reviews)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))