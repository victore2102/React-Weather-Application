import React, { useState } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import ModalForecast from './ModalForecast';
import ModalHeader from './ModalHeader';


export default function ForecastModalView(
{modalOpen, modalDate, forecastTimes, forecastTemps, forecastWeather, modalClose,
}:{
modalOpen: boolean, modalDate: string, forecastTimes: string[], forecastTemps: string[], forecastWeather: string[], modalClose: (params: any) => any,
})


{


    return (
        <Modal
            className="Modal"
            isOpen={modalOpen}
            onRequestClose={modalClose}
            ariaHideApp={false}
        >
            <div className="weather-box">
                <ModalHeader 
                modalDate={modalDate}
                modalClose={modalClose}
                />
                <ModalForecast 
                forecastTimes={forecastTimes}
                forecastTemps={forecastTemps}
                forecastWeather={forecastWeather}
                time={0}
                />
                <ModalForecast 
                forecastTimes={forecastTimes}
                forecastTemps={forecastTemps}
                forecastWeather={forecastWeather}
                time={1}
                />
                <ModalForecast 
                forecastTimes={forecastTimes}
                forecastTemps={forecastTemps}
                forecastWeather={forecastWeather}
                time={2}
                />
                <ModalForecast 
                forecastTimes={forecastTimes}
                forecastTemps={forecastTemps}
                forecastWeather={forecastWeather}
                time={3}
                />
                <ModalForecast 
                forecastTimes={forecastTimes}
                forecastTemps={forecastTemps}
                forecastWeather={forecastWeather}
                time={4}
                />
                <ModalForecast 
                forecastTimes={forecastTimes}
                forecastTemps={forecastTemps}
                forecastWeather={forecastWeather}
                time={5}
                />
                <ModalForecast 
                forecastTimes={forecastTimes}
                forecastTemps={forecastTemps}
                forecastWeather={forecastWeather}
                time={6}
                />
                <ModalForecast 
                forecastTimes={forecastTimes}
                forecastTemps={forecastTemps}
                forecastWeather={forecastWeather}
                time={7}
                />
            </div>
        </Modal>
    );
}