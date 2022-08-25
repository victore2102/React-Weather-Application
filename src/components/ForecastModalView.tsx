import { Dispatch, SetStateAction } from 'react';
import '../index.css';
import '../App.css';
import Modal from 'react-modal';
import ModalForecast from './ModalForecast';
import ModalHeader from './ModalHeader';


export default function ForecastModalView(
{modalOpen, modalDate, forecastTimes, forecastTemps, forecastWeather, setmodalOpen, setmodalDate, setForecastTimes, setForecastTemps, setForecastWeather,
}:{
modalOpen: boolean, modalDate: string, forecastTimes: string[], forecastTemps: string[], forecastWeather: string[],
setmodalOpen: Dispatch<SetStateAction<boolean>>, setmodalDate: Dispatch<SetStateAction<string>>, setForecastTimes: Dispatch<SetStateAction<string[]>>, 
setForecastTemps: Dispatch<SetStateAction<string[]>>, setForecastWeather: Dispatch<SetStateAction<string[]>>,
})


{

    function modalClose() {
        setmodalOpen(false);
        setForecastTimes([]);
        setmodalDate('');
        setForecastTemps([]);
        setForecastTimes([]);
        setForecastWeather([]);
    }


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