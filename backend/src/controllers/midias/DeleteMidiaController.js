const connection = require('../../database/connection');

module.exports = {
    async index(request, response) {
        const { midiaId } = request.params;
        
        const midia = await connection('midia')
            .where('midiaId', midiaId)
            .select('nome_capa')
            .first();

        await connection('midia')
            .where('midiaId', midiaId)
            .delete();

        return response.json({ midia })
    }
}