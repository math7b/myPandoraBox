import React from 'react';

import Header from '../../Includes/Header';
import Footer from '../../Includes/Footer';

import Img from '../../../assets/Midias/Animes/bleach.jpg';

import './styles.css';

export default function Animes() {
    return (
        <div className="backgroundImg">
            <Header />
            <div className="container">
                <div className="midia">
                    <img src={Img} alt="Bleach" />
                    <div className="info">
                        <p>2018</p>
                        <p>12</p>
                        <p>1</p>
                    </div>
                    <div className="nomeCapa">
                        <p>Nome Capa</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}