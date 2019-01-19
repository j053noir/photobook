// Load express dependency
const express = require('express');
// Load Body Parser
const bodyParser = require('body-parser');
// Load API Version 1.0
const api = require('./api/v1');
// Set variable app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// API Routes
// Default
app.use('/api', api);
// Version 1.0
app.use('/api/v1', api);

// 404- Not Found Middleware
app.use((req, res, next) => {
  res.status(404);
  res.json({
    message: 'Resource not found',
  });
});

// 500 - Internal Server Error Middleware
app.use((err, req, res, next) => {
  const { message = 'Internal Server Error' } = err;
  res.status(500);
  res.json({
    message,
  });
});

module.exports = app;
