const express = require('express');

const AnimesController = require('./controllers/midias/AnimesController');
const FilmesController = require('./controllers/midias/FilmesController');
const SeriesController = require('./controllers/midias/SeriesController');
const DeleteMidiaController = require('./controllers/midias/DeleteMidiaController');
const DetailsMidiaController = require('./controllers/midias/DetailsMidiaController.js');

const routes = express.Router();

routes.delete('/midias/delete/:midiaId', DeleteMidiaController.index);

routes.get('/midias/animes', AnimesController.index);
routes.get('/midias/filmes', FilmesController.index);
routes.get('/midias/series', SeriesController.index);

routes.get('/midia/details/:midiaId', DetailsMidiaController.index);

routes.post('/midias/animes/create', AnimesController.create);
routes.post('/midias/filmes/create', FilmesController.create);
routes.post('/midias/series/create', SeriesController.create);

routes.post('/midias/animes/:midiaId', AnimesController.update);
routes.post('/midias/filmes/:midiaId', FilmesController.update);
routes.post('/midias/series/:midiaId', SeriesController.update);

module.exports = routes;