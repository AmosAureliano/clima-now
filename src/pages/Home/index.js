import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

import logo from '../../assets/imagens/logo.png';
import minimum from '../../assets/imagens/minimum.png';
import maximum from '../../assets/imagens/maximum.png';
import loading from '../../assets/gifs/loading.gif';
import nubladoNight from '../../assets/imagens/002-cloud-night.png';
import nubladoMorning from '../../assets/imagens/004-clouds-sun.png';
import chuva from '../../assets/imagens/006-cloud.png';
import ceuLimpoDia from '../../assets/imagens/012-sun.png';
import ceuLimpoNoite from '../../assets/imagens/013-half-moon.png';
import nevoa from '../../assets/imagens/028-clouds.png';
import trovoada from '../../assets/imagens/018-lighting.png';
import neve from '../../assets/imagens/010-snow.png';

export default function Home(){
    var data = new Date();
    var dias = ['Domingo', 'Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado']
    const [location, setLocation] = useState(false);
    const[weather, setWeather] = useState(false);

    var imagem = '';

    
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

            <div className="load-screen">
                <img src={loading} alt="loading"/>
                <p>Carregando....</p>
                </div>
        )
    }else{


        if(weather['weather']['0']['description'] == "céu limpo"){
            if(data.getHours() >= 5 && data.getHours() < 18){
                imagem = ceuLimpoDia
            }
            else{
                imagem = ceuLimpoNoite
            }
        }else if(weather['weather']['0']['description'] == "chuva leve" ||
            weather['weather']['0']['description'] == "chuva de banho" ||
            weather['weather']['0']['description'] == "chuva"){
            
            imagem = chuva    
        }else if(weather['weather']['0']['description'] == "névoa" || weather['weather']['0']['description'] == "nevoa" || weather['weather']['0']['description'] == "nuvens dispersas"){
            imagem =  nevoa
        }else if(weather['weather']['0']['description'] == "poucas nuvens" || weather['weather']['0']['description'] == "Poucas nuvens" || weather['weather']['0']['description'] == "nuvens quebradas"){
            if(data.getHours() >= 5 && data.getHours() < 18){
                imagem = nubladoMorning
            }
            else{
                imagem = nubladoNight
            }
        }else if( weather['weather']['0']['description'] == "trovoada" ){
            imagem = trovoada
        }else if(weather['weather']['0']['description'] == "neve" ){
            imagem = neve
        }




        return(
            
            <div className="container">
                <div className="header">
                    <img src={logo} alt="Logo ClimaNow"/>
                    
                    
                </div>
                <p id="warning">*Permita a localização no browser</p>
                <div className="body">
                    <div className="hoje">
                        <h2 id="day">{dias[data.getDay()].toUpperCase()} {data.getHours()}:{data.getMinutes()}</h2>
                        <h1 id="local"> { weather['name'].toUpperCase()  }</h1>
                        <img src={imagem} id="clima"/>
                        <p id="description">{weather['weather']['0']['description'].toUpperCase()}</p>

                        <div className="temperature">
                            

                            <p>{ weather['main']['temp']}º</p>
                            
                        </div>       
                    </div>
                </div>
            </div>
        )
    }

    
}