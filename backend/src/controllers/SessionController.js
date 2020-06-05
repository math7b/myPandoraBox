const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async logar(request, response) {
        const { user_name, adm_name, senha } = request.body;
        let _status, _statusData, _adm_name, _senha;

        function CryptarSha256(data) {
            let date = crypto.createHmac("sha256", "password")
                .update(data)
                .digest("hex");
            return date;
        };

        if ((user_name && adm_name && senha) != null) {
            _senha = CryptarSha256(senha);
            _adm_name = CryptarSha256(adm_name);

            _statusData = await connection("usuarios")
                .select("*")
                .where('user_name', user_name)
                .andWhere('senha', _senha)
                .first();

            if (_statusData != null) {
                _status = 3;
            } else {
                _status = 2;
            }
        } else {
            _status = 1;
        }

    return response.json({ _status, /*user_name, adm_name, senha, _adm_name, _senha, _statusData*/ })
    },
    async cadastrar(request, response) {
        const { user_name, adm_name, senha } = request.body;
        let _status, _adm_name, _senha;

        function CryptarSha256(data) {
            let date = crypto.createHmac("sha256", "password")
                .update(data)
                .digest("hex");
            return date;
        };

        if (adm_name != '') {
            _adm_name = CryptarSha256(adm_name);
        }
        if ((user_name && senha) != '') {
            _senha = CryptarSha256(senha);

            let _usuario = await connection("usuarios")
                .select('*')
                .where('user_name', user_name)
                .first();

            if (_usuario == null) {
                await connection('usuarios')
                    .insert({ user_name: user_name, adm_name: _adm_name, senha: _senha });
                _status = 3;
            } else {
                _status = 2;
            }

        } else {
            _status = 1;
        }

        return response.json({ _status, /*user_name, senha, adm_name, _adm_name, _senha,*/ })

    }
}