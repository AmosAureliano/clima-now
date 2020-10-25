import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import './styles.css';

import logo from '../../assets/imagens/logo.png';
import cloudTest  from '../../assets/imagens/006-cloud.png';
import minimum from '../../assets/imagens/minimum.png';
import maximum from '../../assets/imagens/maximum.png';

export default function Home(){
    return(
        <div className="container">

            <div className="header">
                <img src={logo} alt="Logo ClimaNow"/>
                <input type="text" placeholder="Pesquise uma cidade"/>
                <button><AiOutlineSearch color="#FFFF" size="1.5vw"/></button>
            </div>
            <div className="body">
                <div className="hoje">
                    <h2 id="day">QUINTA-FEIRA</h2>
                    <h1 id="local">SÃO PAULO</h1>
                    <img src={cloudTest} id="clima"/>
                    <div className="temperature">
                        <img src={minimum} id="minimum"/>
                        <p>20º</p>
                        <img src={maximum} id="maximum"/>
                        <p>27º</p>
                    </div>
                   
                </div>

                <div className="amanha">
                    <h1 id="day">SEXTA-FEIRA</h1>
                    
                    <div className="temperature-container">
                        <img src={cloudTest} id="clima"/>
                        <img src={minimum} id="minimum"/>
                        <p>20º</p>
                        <img src={maximum} id="maximum"/>
                        <p>27º</p>
                    </div>
                </div>

                <div className="depois-de-amanha">
                    <h1 id="day">SÁBADO</h1>
                    
                    <div className="temperature-container">
                        <img src={cloudTest} id="clima"/>
                        <img src={minimum} id="minimum"/>
                        <p>20º</p>
                        <img src={maximum} id="maximum"/>
                        <p>27º</p>
                    </div>
                </div>

                <div className="daqui-a-dois-dias">
                    <h1 id="day">DOMINGO</h1>
                    
                    <div className="temperature-container">
                        <img src={cloudTest} id="clima"/>
                        <img src={minimum} id="minimum"/>
                        <p>20º</p>
                        <img src={maximum} id="maximum"/>
                        <p>27º</p>
                    </div>
                </div>
            </div>

        </div>
    )
}