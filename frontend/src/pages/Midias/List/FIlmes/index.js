import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../Includes/Header';
import Footer from '../../../Includes/Footer';

import api from '../../../../services/api';

import '../styles.css';

export default function Filmes() {
    const [midia, setMidia] = useState([]);

    useEffect(() => {
        api.get('midias/filmes').then(response => {
            setMidia(response.data);
        })
    });

    return (
        <div className="backgroundImg">
            <Header />
            <div className="midiaContainer">
                {midia.map(midia => (
                    <div key={midia.midiaId}>
                        <div className="midia">
                            <Link to={`../midia/details/filme/${midia.midiaId}`}>
                                <img src={
                                    require(`../../../../assets/Midias/Filmes/${midia.img_capa}`)
                                } alt="img" />
                                <div className="info">
                                    <p>{midia.duracao}</p>
                                    <p>{midia.ano_lancamento}</p>
                                    <p>{midia.faixa_etaria}</p>
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