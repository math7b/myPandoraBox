import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Includes/Header';
import Footer from '../../Includes/Footer';

import './styles.css';

export default function Home() {
    function ValidaUsuario() {
        const usuario = localStorage.getItem('usuario');
        const ADM = localStorage.getItem('ADM');
        let Mensagem;
        if (usuario === 'Hiragy7' && (ADM === 'true')) {
            Mensagem = 'Bem vindo~ Desenvolvedor!';
        } else {
            Mensagem = `Bem vindo~ ${usuario}`;
        }
        return Mensagem;
    }
    const Mensagem = ValidaUsuario();

    return (
        <div className="backgroundImg">
            <Header />
            <div className="home">
                <div className="homeTitle">
                    <h1>{Mensagem}</h1>
                </div>
            </div>
            {/* <div id="menuMidia" className="homeMidia">
                <div className="menu">
                    <ul>
                        <li><a href="#topo">Home</a></li>
                        <li><Link to={'/midias/animes'}>Animes S2</Link></li>
                        <li><Link to={'/midias/series'}>Séries</Link></li>
                        <li><Link to={'/midias/animes'}>Filmes</Link></li>
                    </ul>
                </div>
            </div> */}
            <Footer />
        </div>
    );
}