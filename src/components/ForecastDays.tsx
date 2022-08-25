import { Dispatch, SetStateAction } from 'react';
import '../index.css';
import '../App.css';


export default function ForecastDays(
{setForecastTempCSS, forecastTempCSS, forecastDateBuilder, forecastModal, day,
}:{
setForecastTempCSS: Dispatch<SetStateAction<string>>, forecastTempCSS: string, forecastDateBuilder: (param: Date, param2: number, param3: number) => string, forecastModal: (param: number) => void, day: number,
})


{


    return (
        <div className='forecast-day'>
            <button className='modal-button' 
            onMouseOver={() => setForecastTempCSS('forecast-temp-alt')} 
            onMouseLeave={() => setForecastTempCSS('forecast-temp')} onClick={() => forecastModal(day)}>
                <div className='date-forecast'>
                    {forecastDateBuilder(new Date(), day, 1)}
                        <div className={forecastTempCSS}>
                            Forecast
                        </div>
                </div>
            </button>
        </div>
        
    );
    
}