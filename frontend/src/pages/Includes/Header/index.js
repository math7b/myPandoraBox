import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

export default function Header() {
    const usuario = localStorage.getItem('usuario');
    const history = useHistory();

    function logout() {
        localStorage.clear();
        history.push('/');
    }

    const url = window.location.pathname;
    console.log(url);
    let home;
    if (url !== '/midias/home') {
        home = (<li><Link to={'/midias/home'}>Home</Link></li>)
    }

    return (
        <header>
            <div className="logo">
                <h2>
                    <b>
                        <Link to="/midias/home">
                            Pandora Box
                        </Link>
                    </b>
                </h2>
            </div>
            <ul>
                <li>
                    <Link to={'/midias/filmes'}>Filmes</Link>
                </li>
                <li>
                    <Link to={'/midias/series'}>Séries</Link>
                </li>
                <li>
                    <Link to={'/midias/animes'}>Animes</Link>
                </li>
                {home}
                <li>
                    <Link onClick={logout} to={'#'}>{usuario} (sair)</Link>
                </li>
            </ul>
        </header>
    );
}
