const express = require('express');

const AnimesController = require('./controllers/midias/AnimesController');
const FilmesController = require('./controllers/midias/FilmesController');
const SeriesController = require('./controllers/midias/SeriesController');

const routes = express.Router();

routes.get('/midias/animes', AnimesController.index);
routes.get('/midias/filmes', FilmesController.index);
routes.get('/midias/series', SeriesController.index);

routes.post('/midias/animes/create', AnimesController.create);
routes.post('/midias/filmes/create', FilmesController.create);
routes.post('/midias/series/create', SeriesController.create);

routes.delete('/midias/animes/:midiaId', AnimesController.delete);
routes.delete('/midias/filmes/:midiaId', FilmesController.delete);
routes.delete('/midias/series/:midiaId', SeriesController.delete);

routes.post('/midias/animes/:midiaId', AnimesController.change);
routes.post('/midias/filmes/:midiaId', FilmesController.change);
routes.post('/midias/series/:midiaId', SeriesController.change);

module.exports = routes;