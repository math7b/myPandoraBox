const express = require('express');

const routes = express.Router();

routes.get('/', function(request, response) {
    response.send('Test');
});

module.exports = routes;