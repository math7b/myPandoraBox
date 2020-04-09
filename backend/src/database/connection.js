const knex = require('knex');
const configuration = require('../../knexfile');

const config = configuration.development;

connecton = knex(config)

module.exports = connecton;