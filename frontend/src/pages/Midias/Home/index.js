import React from 'react';

import Header from '../../Includes/Header';
import Footer from '../../Includes/Footer';

import './styles.css';

export default function Animes() {
    return (
        <div className="BG">
            <Header />
                <div className="container">

                    <div className="homeTitle">
                        <h1>Bem vindo~ Desenvolvedor!</h1>
                    </div>
                </div>
            <Footer />
        </div>
    );
}