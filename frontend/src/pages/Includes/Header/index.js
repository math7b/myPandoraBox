import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
    return (
        <header>
            <div className="logo">
                <h2>
                    <b>
                        <Link className="link" to="/midias/home">
                            Yuki Katashy
                        </Link>
                    </b>
                </h2>
            </div>
            <div className="menuHeader">
                <ul>
                    <li>
                        <Link className="link" to="/midias/animes">
                            Animes
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="#">
                            Hiragy7 (sair)
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
