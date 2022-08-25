import '../index.css';
import '../App.css';


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