import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Logar() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory()

    async function Logar(e) {
        e.preventDefault();
        const response = await api.post('/session/logar', { usuario, senha });
        const ADM = response.data._adm
        const data = response.data._status;
        if (data != 1) {
            if (data != 2) {
                localStorage.setItem('usuario', usuario);
                if (usuario === 'Hiragy7' && ADM === true) {
                    localStorage.setItem('ADM', true);
                }
                history.push('midias/home');
            } else {
                alert('Usuario e/ou senha Invaludos!')
            }
        } else {
            alert('Preencha os campos!')
        }
    }

    return (
        <div className="backgroundImg">
            <div className="logon">
                <form onSubmit={Logar} method="post">
                    <input type="text"
                        placeholder="Nome de usuario?"
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />
                    <label htmlFor="usuario"><p>Quero saber quem é você! ;^;</p></label>
                    <input type="password"
                        placeholder="Conte-me sua senha!"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <label htmlFor="senha"><p>Quero saber~ ( ^-^)/</p></label>
                    <div className="formButtons">
                        <button type="submit">Logar?</button>
                        <Link className="button" to="/cadastrar">
                            Cadastrar?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}