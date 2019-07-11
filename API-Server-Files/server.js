/*
 * Main server file for YJA 2019-2020 Tech Director Application
 */

const express = require('express');
const bodyParser = require('body-parser');

const api = require('./api');
const { connectToDB } = require('./lib/mongo');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static('public'));


/*
 * Enables server to accept requests across resources.
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  next();
});

/*
 * All routes for the API are written in the /api directory. The router
 * is in api/index.js.
 */
app.use('/', api);

app.use('*', function (req, res, next) {
  res.status(404).json({
    error: "Requested resource " + req.originalUrl + " does not exist."
  });
});

/*
 * Starts API server.
 */
connectToDB(() => {
  app.listen(port, () => {
    console.log("== Server is running on port", port);
  });
});
