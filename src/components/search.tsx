import React, { useState } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';


const api = {
  key: "a2afcf79342a908e248e9b85ddc69e4f",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function Search()
{

    const navigate = useNavigate();

    function datebuilder(d: Date) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState<{main: any, name: any, sys: any, weather: any} | undefined>(undefined);

    const find = (evt: React.KeyboardEvent) => {
        if(evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
                console.log(weather);
            });
        }
    }



    return (
        <div className={(typeof weather != "undefined") ? 
        ((weather.weather[0].main === "Clouds") ? 'Search-Clouds' : 'Search' && 
        (weather.weather[0].main === "Clear") ? 'Search-Clear' : 'Search' &&
        (weather.weather[0].main === "Rain") ? 'Search-Rain' : 'Search')
        : 'Search'}>
            <header>
                <input 
                    type='text'
                    className='Search-Input'
                    placeholder='Search...'
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={find}
                />
            </header>
            {(typeof weather != "undefined") ? (
                <div>
                    <div className='location-box'>
                        <div className='location'>
                            {weather.name}, {weather.sys.country}
                        </div>
                        <div className='date'>
                            {datebuilder(new Date())}
                        </div>
                    </div>
                    <div className="weather-box">
                        <div className='temp'>
                            {Math.round(weather.main.temp)}°C | {Math.round((weather.main.temp * 1.8) + 32)}°F
                        </div>
                        <div className='weather-condition'>
                            {weather.weather[0].main}
                        </div>
                    </div>
                </div>
            ) : ('')}
            <footer className='footer'>
                <button
                className='Button'
                onClick={() => navigate("/")}
                >
                    Start Page
                </button>
            </footer>
        </div>
    );
}