import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Cadastrar() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function Cadastrar(e) {
        e.preventDefault();
        const response = await api.post('/session/cadastrar', { usuario, senha });
        const data = response.data._status;
        if (data != 1) {
            if (data != 2) {
                localStorage.setItem('usuario', usuario);
                history.push('/midias/home');
            } else {
                alert('Usuario já existe!');
            }
        } else {
            alert('Preenpreencha os campos!');
        }
        console.log(response, data)
    }
    return (
        <div className="backgroundImg">
            <div className="logon">
                <form onSubmit={Cadastrar} method="post">
                    <input type="text"
                        placeholder="Nome de usuário?"
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />
                    <label htmlFor="usuario"><p>Deixe a imaginação voar! ( ^-^)/</p></label>
                    <input type="password"
                        placeholder="Senha?"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <label htmlFor="senha"><p>Capricha na senha! ;^;</p></label>
                    <div className="formButtons">
                        <button type="submit">Cadastrar?</button>
                        <Link className="button" to="/">
                            Já possue uma conta?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}