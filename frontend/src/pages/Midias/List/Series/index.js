import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../Includes/Header';
import Footer from '../../../Includes/Footer';

import api from '../../../../services/api';

import '../styles.css';

export default function Series() {
    const [midias, setMidias] = useState([]);

    useEffect(() => {
        api.get('/midias/series').then(response => {
            setMidias(response.data);
        })
    })

    return (
        <div className="backgroundImg">
            <Header />
            <div className="midiaContainer">
                {midias.map(midia => (
                    <div key={midia.midiaId}>
                        <div className="midia">
                            <Link to={`../midia/details/serie/${midia.midiaId}`}>
                                <img src={
                                    require(`../../../../assets/Midias/Series/${midia.img_capa}`)
                                } alt="img" />
                                <div className="info">
                                    <p>{midia.ano_lancamento}</p>
                                    <p>{midia.num_episodios}</p>
                                    <p>{midia.num_temporada}</p>
                                </div>
                                <div className="nomeCapa">
                                    <p>{midia.nome_capa}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}