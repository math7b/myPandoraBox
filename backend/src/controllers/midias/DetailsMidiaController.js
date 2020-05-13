const connection = require('../../database/connection');

module.exports = {
    async index(request, response) {
        const { midiaId } = request.params;

        const details = await connection('midia')
            .where('midiaId', midiaId)
            .select('*');

        return response.json(details)
    }
}