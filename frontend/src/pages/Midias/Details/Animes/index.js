import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../Includes/Header';
import Footer from '../../../Includes/Footer';

import api from '../../../../services/api';

import './styles.css';

export default function Details() {
    const [details, setDetails] = useState([]);
    const url = window.location.pathname;
    const midiaId = url.substring(url.lastIndexOf('/') + 1);
    useEffect(() => {
        api.get(`midia/Details/${midiaId}`).then(response => {
            setDetails(response.data);
        })
    }, [])

    return (
        <div className="backgroundImg">
            <Header />
            <div className="container">
                {details.map(detail => (
                    <div key={detail.midiaId}>
                        <div className="details">
                            <div className="groupRight">
                                <img src={require(`../../../../assets/Midias/Animes/${detail.img_capa}`)} />
                                <div className="detalhes">
                                    <p><b>Ep: </b>{detail.num_episodios}</p>
                                    <p><b>Temporadas: </b>{detail.num_temporadas}</p>
                                    <p><b>Temporada: </b>{detail.num_temporada}</p>
                                    <p><b>Duração: </b>{detail.duracao}</p>
                                    <p><b>Lançado: </b>{detail.ano_lancamento}</p><br />
                                    <p><b>Gêneros: </b><br />{detail.genero}</p><br />
                                    <p><b>Data de adição: </b><br />{detail.data_adicao}</p>
                                    <p><b>Data de modificaçao: </b><br />{detail.data_modificacao}</p>
                                </div>
                            </div>
                            <div className="groupLeft">
                                <div className="descricao">
                                    <h3><b>{detail.nome_completo}</b></h3>
                                    <p>{detail.descri}</p>
                                </div>
                                <div className="links">
                                    <a href={detail.link_midia}>
                                        <button>Ir para o anime?</button>
                                    </a>
                                    <a href={detail.link_intru}>
                                        <button>Ir para a intru?</button>
                                    </a>
                                    <a href={detail.link_amv}>
                                        <button>Ir para o amv?</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}