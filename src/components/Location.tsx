import React, { useState, Dispatch, SetStateAction } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';


export default function Location(
{weather, forecastDateBuilder,
}:{
weather: {main: any, name: any, sys: any, weather: any}, forecastDateBuilder: (param: any, param2: any) => any,
})


{


    return (
        <div className='location-box'>
            <div className='location'>
                {weather.name}, {weather.sys.country}
            </div>
            <div className='date'>
                {forecastDateBuilder(new Date(), 0)}
            </div>
        </div>
        
    );
    
}