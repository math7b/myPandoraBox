import React from 'react';

import Header from '../../Includes/Header';
import Footer from '../../Includes/Footer';

import './styles.css';

export default function Home() {
    return (
        <div className="backgroundImg">
            <Header />
                <div className="homeTitle">
                    <h1>Bem vindo~ Desenvolvedor!</h1>
                    <img src={require(`../../../assets/gift.gif`)} />
                </div>
            <Footer />
        </div>
    );
}