import React, { useState, Dispatch, SetStateAction } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';


export default function ForecastDays(
{setForecastTempCSS, forecastTempCSS, forecastDateBuilder, forecastModal, day,
}:{
setForecastTempCSS: Dispatch<SetStateAction<string>>, forecastTempCSS: string, forecastDateBuilder: (param: any, param2: any) => any, forecastModal: (param: any) => any, day: number,
})


{


    return (
        <div className='forecast-day'>
            <button className='modal-button' 
            onMouseOver={() => setForecastTempCSS('forecast-temp-alt')} 
            onMouseLeave={() => setForecastTempCSS('forecast-temp')} onClick={() => forecastModal(1)}>
                <div className='date-forecast'>
                    {forecastDateBuilder(new Date(), day)}
                        <div className={forecastTempCSS}>
                            Forecast
                        </div>
                </div>
            </button>
        </div>
        
    );
    
}