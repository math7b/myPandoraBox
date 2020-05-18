import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
    const url = window.location.pathname;

    let home;

    if (url !== '/midias/home') {
        home = (<li><Link to={'/midias/home'}>Home</Link></li>)
    }

    return (
        <header id="topo">
            <div className="logo">
                <h2>
                    <b>
                        <Link to="/midias/home">
                            Yuki Katashy
                        </Link>
                    </b>
                </h2>
            </div>
            <div className="header">
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
                        <Link to={'#'}>Hiragy7 (sair)</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
