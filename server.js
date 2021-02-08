const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./server/config/mongoose.config");
// req is short for request
// res is short for response
app.use(express.json(), express.urlencoded({ extended: true }));
const routes = require("./server/routes/jokes.routes");
routes(app);
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
