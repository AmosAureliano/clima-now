import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';

import './styles.css';

import logo from '../../assets/imagens/logo.png';
import cloudTest  from '../../assets/imagens/006-cloud.png';
import minimum from '../../assets/imagens/minimum.png';
import maximum from '../../assets/imagens/maximum.png';

export default function Home(){

    const [location, setLocation] = useState(false);
    const[weather, setWeather] = useState(false);

    let getWeather = async (lat, long) => {

        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {

            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: 'pt',
                units: 'metric'
            }

        });

        setWeather(res.data);
    }

    useEffect( ()=> {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true);
        })
    }, []);


    if(weather == false){
        return(
            <div>Carregando....</div>
        )
    }else{
        return(

            <div className="container">
    
                <div className="header">
                    <img src={logo} alt="Logo ClimaNow"/>
                    <input type="text" placeholder="Pesquise uma cidade"/>
                    <button><AiOutlineSearch color="#FFFF" size="1.5vw"/></button>
                    <p>*Permita a localização no browser</p>
                </div>
                <div className="body">
                    <div className="hoje">
                        <h2 id="day">QUINTA-FEIRA</h2>
                        <h1 id="local"> { weather['name'].toUpperCase()  }</h1>
                        <img src={cloudTest} id="clima"/>
                        <div className="temperature">
                            <img src={minimum} id="minimum"/>
                            <p>{ weather['main']['temp_min']}</p>
                            <img src={maximum} id="maximum"/>
                            <p>{ weather['main']['temp_max']}</p>
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

    
}