const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async logar(request, response) {
        const { usuario, senha } = request.body;
        let _status, _statusData, _senha, _adm;
        function CryptarSha256(data) {
            let _data = crypto.createHmac("sha256", "password")
                .update(data)
                .digest("hex");
            return _data;
        };
        if ((usuario && senha) != "") {
            _senha = CryptarSha256(senha);

            _statusData = await connection("usuarios")
                .select("*")
                .where('usuario', usuario)
                .andWhere('senha', _senha)
                .first();
            if (_statusData != null) {
                if (usuario === 'Hiragy7') {
                    _adm = true;
                }
                _status = 3;
            } else {
                _status = 2;
            }
        } else {
            _status = 1;
        }
        return response.json({ _status, _adm /*, usuario, senha, _senha, _statusData*/ })
    },

    async cadastrar(request, response) {
        const { usuario, senha } = request.body;
        let _status, _senha;
        function CryptarSha256(data) {
            let _data = crypto.createHmac("sha256", "password")
                .update(data)
                .digest("hex");
            return _data;
        };
        if ((usuario && senha) != '') {
            _senha = CryptarSha256(senha);
            let _usuario = await connection("usuarios")
                .select('*')
                .where('usuario', usuario)
                .first();
            if (_usuario == null) {
                _status = 3;
                await connection('usuarios')
                    .insert({ usuario: usuario, senha: _senha });

            } else {
                _status = 2;
            }
        } else {
            _status = 1;
        }
        return response.json({ _status /*, usuario, senha, _senha,*/ })
    }
}