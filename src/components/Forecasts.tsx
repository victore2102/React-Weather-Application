import { Dispatch, SetStateAction } from 'react';
import '../index.css';
import '../App.css';
import ForecastDays from './ForecastDays';


export default function Forecasts(
{setForecastTempCSS1, forecastTempCSS1, setForecastTempCSS2, forecastTempCSS2, setForecastTempCSS3, forecastTempCSS3, 
    setForecastTempCSS4, forecastTempCSS4, setForecastTempCSS5, forecastTempCSS5, forecastDateBuilder, forecastModal,
}:{
setForecastTempCSS1: Dispatch<SetStateAction<string>>, forecastTempCSS1: string, setForecastTempCSS2: Dispatch<SetStateAction<string>>, forecastTempCSS2: string,
setForecastTempCSS3: Dispatch<SetStateAction<string>>, forecastTempCSS3: string, setForecastTempCSS4: Dispatch<SetStateAction<string>>, forecastTempCSS4: string,
setForecastTempCSS5: Dispatch<SetStateAction<string>>, forecastTempCSS5: string, forecastDateBuilder: (param: Date, param2: number, param3: number) => string, forecastModal: (param: number) => void,
})


{


    return (
        <div className='forecast'>
            <ForecastDays 
            setForecastTempCSS={setForecastTempCSS1}
            forecastTempCSS={forecastTempCSS1}
            forecastDateBuilder={forecastDateBuilder}
            forecastModal={forecastModal}
            day={1}
            />
            <ForecastDays 
            setForecastTempCSS={setForecastTempCSS2}
            forecastTempCSS={forecastTempCSS2}
            forecastDateBuilder={forecastDateBuilder}
            forecastModal={forecastModal}
            day={2}
            />
            <ForecastDays 
            setForecastTempCSS={setForecastTempCSS3}
            forecastTempCSS={forecastTempCSS3}
            forecastDateBuilder={forecastDateBuilder}
            forecastModal={forecastModal}
            day={3}
            />
            <ForecastDays 
            setForecastTempCSS={setForecastTempCSS4}
            forecastTempCSS={forecastTempCSS4}
            forecastDateBuilder={forecastDateBuilder}
            forecastModal={forecastModal}
            day={4}
            />
            <ForecastDays 
            setForecastTempCSS={setForecastTempCSS5}
            forecastTempCSS={forecastTempCSS5}
            forecastDateBuilder={forecastDateBuilder}
            forecastModal={forecastModal}
            day={5}
            />
        </div>
    );

}