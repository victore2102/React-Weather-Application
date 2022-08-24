import React, { useState } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';


export default function ModalForecast(
{forecastTimes, forecastTemps, forecastWeather, time
}:{
forecastTimes: string[], forecastTemps: string[], forecastWeather: string[], time: number,
})


{


    return (
        <div className='modal-f'>
            <div className='modal-times'>
            {forecastTimes[time]}
            </div>
            <div className='modal-temps'>
            {forecastTemps[time]}
            </div>
            <div className='modal-w'>
            {forecastWeather[time]}
            </div>
        </div>
    );
}