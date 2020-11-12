const express = require("express");
const app = express();
const port = 3321;
const path = require('path')

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Listening on port ${port}!`))