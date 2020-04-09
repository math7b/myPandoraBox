const connection = require('../database/connection');

module.exports = {
    async index (resques, response) {
        const midia = await connection('midia')
            .select('*');
        return response.json(midia);
    }
}