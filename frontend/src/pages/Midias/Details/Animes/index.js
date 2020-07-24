import React, { useState, useEffect } from 'react';

import Header from '../../../Includes/Header';
import Footer from '../../../Includes/Footer';

import api from '../../../../services/api';

import '../styles.css';

export default function AnimeDetails() {
    const [details, setDetails] = useState([]);

    const url = window.location.pathname;
    const midiaId = url.substring(url.lastIndexOf('/') + 1);

    useEffect(() => {
        api.get(`midia/Details/${midiaId}`).then(response => {
            setDetails(response.data);
        })
    })

    let dataModificacao, data_modificacao;

    details.map(detail => (
        data_modificacao = detail.data_modificacao
    ));

    if (data_modificacao != null) {
        dataModificacao = (<p><b>Data de modificaçao: </b><br />{data_modificacao}</p>);
    } else {
        dataModificacao = null;
    }

    return (
        <div className="backgroundImg">
            <Header />
            <div className="midiaContainer">
                {details.map(detail => (
                    <div key={detail.midiaId}>
                        <div className="details">
                            <div className="groupLeft">
                                <img src={
                                    require(`../../../../assets/Midias/Animes/${detail.img_capa}`)
                                } alt="img" />
                                <div className="detalhes">
                                    <h4>
                                        <p><b>Nome: </b>{detail.nome_capa}</p><br />
                                        <p><b>Recomendado: </b>{detail.faixa_etaria}</p><br />
                                        <p><b>Ep: </b>{detail.num_episodios}</p>
                                        <p><b>Temporadas: </b>{detail.num_temporadas}</p>
                                        <p><b>Temporada: </b>{detail.num_temporada}</p>
                                        <p><b>Duração: </b>{detail.duracao}</p>
                                        <p><b>Lançado: </b>{detail.ano_lancamento}</p><br />
                                        <p><b>Gêneros: </b><br />{detail.genero}</p><br />
                                        <p><b>Data de adição: </b><br />{detail.data_adicao}</p>
                                        {dataModificacao}
                                    </h4>
                                </div>
                            </div>
                            <div className="groupRight">
                                <div className="descri">
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