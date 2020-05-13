const connection = require('../../database/connection');

module.exports = {
    async index(request, response) {
        const midias = await connection('midia')
            .select('*')
            .where('tipo_midia', 'anime')
            .orderBy('nome_capa');

        return response.json(midias);
    },

    async create(request, response) {
        const {
            tipo_midia, tipo_conteudo, nome_completo, nome_capa, img_capa, ano_lancamento, num_episodios, num_temporadas, genero, duracao, faixa_etaria, descri, link_midia, link_amv, link_trailer, link_intru, num_temporada, data_adicao, data_modificacao
        } = request.body;

        const midia = await connection('midia').insert({
            tipo_midia, tipo_conteudo, nome_completo, nome_capa, img_capa, ano_lancamento, num_episodios, num_temporadas, genero, duracao, faixa_etaria, descri, link_midia, link_amv, link_trailer, link_intru, num_temporada, data_adicao, data_modificacao
        });

        return response.json({ midia });
    },

    async update(request, response) {
        const { midiaId } = request.params;
        const {
            tipo_midia, tipo_conteudo, nome_completo, nome_capa, img_capa, ano_lancamento, num_episodios, num_temporadas, genero, duracao, faixa_etaria, descri, link_midia, link_amv, link_trailer, link_intru, num_temporada, data_adicao, data_modificacao
        } = request.body;

        const midia = await connection('midia')
            .where('midiaId', midiaId)
            .select('*')
            .first();


        await connection('midia')
            .where({midiaId: midiaId})
            .update({
                tipo_midia: tipo_midia,
                tipo_conteudo: tipo_conteudo,
                nome_completo: nome_completo,
                nome_capa: nome_capa,
                img_capa: img_capa,
                ano_lancamento: ano_lancamento,
                num_episodios: num_episodios,
                num_temporadas: num_temporadas,
                genero: genero,
                duracao: duracao,
                faixa_etaria: faixa_etaria,
                descri: descri,
                link_midia: link_midia,
                link_amv: link_amv,
                link_trailer: link_trailer,
                link_intru: link_intru,
                num_temporada: num_temporada,
                data_adicao: data_adicao,
                data_modificacao: data_modificacao
            });

        return response.json({ midia });
    }
}