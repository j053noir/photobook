// Load express dependency
const express = require('express');
// Load Body Parser
const bodyParser = require('body-parser');
// Load Express Request Id
const requestId = require('express-request-id')();
// Load Logger
const logger = require('./config/logger');
// Load API Version 1.0
const api = require('./api/v1');

// Set variable app
const app = express();

// Setup middleware
app.use(requestId);
app.use(logger.requests);

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
  next({
    message: 'Resource not found',
    statusCode: 404,
    type: 'warn',
  });
});

// 500 - Internal Server Error Middleware
app.use((err, req, res, next) => {
  const { message = 'Internal Server Error', statusCode = 500, type = 'error' } = err;

  const log = `${logger.header(req)} ${statusCode} ${message}`;

  logger[type](log);

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
