import React, { useState, Dispatch, SetStateAction } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';


export default function Weather(
{weather, setTempCSS, tempCSS, forecastModal,
}:{
weather: {main: any, name: any, sys: any, weather: any}, setTempCSS: Dispatch<SetStateAction<string>>, tempCSS: string, forecastModal: (param: any) => any,
})

{


    return (
        <div className="weather-box">
            <button className='modal-button' 
                onMouseOver={() => setTempCSS('temp-alt')} 
                onMouseLeave={() => setTempCSS('temp')} onClick={() => forecastModal(0)}>
                <div className={tempCSS}>
                    {Math.round(weather.main.temp)}°C | {Math.round((weather.main.temp * 1.8) + 32)}°F
                </div>
            </button>
            <div className='weather-condition'>
                {weather.weather[0].main}
            </div>
        </div>
        
    );
    
}