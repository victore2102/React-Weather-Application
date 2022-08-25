import { Dispatch, SetStateAction } from 'react';
import '../index.css';
import '../App.css';


export default function Weather(
{weather, setTempCSS, tempCSS, forecastModal,
}:{
weather: {main: any, name: any, sys: any, weather: any}, setTempCSS: Dispatch<SetStateAction<string>>, tempCSS: string, forecastModal: (param: number) => void,
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