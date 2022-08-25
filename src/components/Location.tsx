import '../index.css';
import '../App.css';


export default function Location(
{weather, forecastDateBuilder,
}:{
weather: {main: any, name: any, sys: any, weather: any}, forecastDateBuilder: (param: Date, param2: number, param3: number) => string,
})


{


    return (
        <div className='location-box'>
            <div className='location'>
                {weather.name}, {weather.sys.country}
            </div>
            <div className='date'>
                {forecastDateBuilder(new Date(), 0, 1)}
            </div>
        </div>
        
    );
    
}