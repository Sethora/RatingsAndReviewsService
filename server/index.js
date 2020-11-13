const express = require("express");
const app = express();
const port = 3321;
const path = require('path')
const db = require('../database')

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/products/:id/users', (req, res) => {
  db.getAllUsers((users) => {
    res.json(users);
  })
})

app.get('/api/products/:id/reviews', (req, res) => {
  db.getAllReviews((reviews) => {
    res.json(reviews);
  })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))