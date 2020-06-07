import React, { useEffect, useState } from 'react';

import Header from '../../../Includes/Header';
import Footer from '../../../Includes/Footer';

import api from '../../../../services/api';

import '../styles.css';

export default function FilmeDetails() {
    const [details, setDetails] = useState([]);
    
    const url = window.location.pathname;
    const midiaId = url.substring(url.lastIndexOf('/') + 1);
    
    useEffect(() => {
        api.get(`midia/details/${midiaId}`).then(response => {
            setDetails(response.data);
        })
    })

    let dataModificacao, data_modificacao;

    details.map(detail => (
        data_modificacao = detail.data_modificacao
    ));

    if (data_modificacao != null) {
        dataModificacao = (<p><b>Data de modificação: </b><br/>{data_modificacao}</p>)
    }

    return (
        <div className="backgroundImg">
            <Header />
            <div className="midiaContainer">
                {details.map(detail => (
                    <div key={detail.midiaId}>
                        <div className="details">
                            <div className="groupRight">
                                <img src={
                                    require(`../../../../assets/Midias/Filmes/${detail.img_capa}`)
                                } alt="img"/>
                                <div className="detalhes">
                                    <h4>
                                        <p><b>Nome: </b>{detail.nome_capa}</p><br/>
                                        <p><b>Ano: </b>{detail.ano_lancamento}</p>
                                        <p><b>Idade: </b><br/>{detail.faixa_etaria}</p>
                                        <p><b>Duração: </b>{detail.duracao}</p>
                                        <p><b>Gêneros: </b><br/>{detail.duracao}</p><br/>
                                        <p><b>Data de adição: </b><br/>{detail.data_adicao}</p>
                                        {dataModificacao}
                                    </h4>
                                </div>
                            </div>
                            <div className="groupLeft">
                                <div className="descri">
                                    <h3><b>{detail.nome_completo}</b></h3>
                                    <p>{detail.descri}</p>
                                </div>
                                <div className="links">
                                    <a href={detail.link_midia}>
                                        <button>Ir para o filme?</button>
                                    </a>
                                    <a href={detail.link_trailer}>
                                        <button>Ir para o trailer?</button>
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