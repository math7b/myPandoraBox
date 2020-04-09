const express = require('express');
const AnimeController = require('./controllers/AnimeController');

const routes = express.Router();

routes.get('/', AnimeController.index)

module.exports = routes;