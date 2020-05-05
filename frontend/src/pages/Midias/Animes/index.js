import React, { useState, useEffect } from 'react';

import Header from '../../Includes/Header';
import Footer from '../../Includes/Footer';

import api from '../../../services/api';

import './styles.css';

export default function Animes() {
    const [midias, setMidias] = useState([]);

    useEffect(() => {
        api.get('midias/animes').then(response => {
            setMidias(response.data);
        })
    }, [])

    return (
        <div className="backgroundImg">
            <Header />
            <div className="container">
                {midias.map(midia => (
                    <div key={midia.midiaId}>
                        <div className="midia">
                            <div className="img">{midia.img_capa}</div>
                            <div className="info">
                                <p>{midia.ano_lancamento}</p>
                                <p>{midia.num_episodios}</p>
                                <p>{midia.num_temporada}</p>
                            </div>
                            <div className="nomeCapa">
                                <p>{midia.nome_capa}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}