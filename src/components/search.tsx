import React, { useState } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';


const api = {
  key: "a2afcf79342a908e248e9b85ddc69e4f",
  base: "https://api.openweathermap.org/data/2.5/",
  base2: "http://api.openweathermap.org/geo/1.0/"
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

    function forecastDateBuilder(d: Date, plus: number) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[(d.getDay() + plus) % 7];

        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let date = d.getDate() + plus;

        if(date > 28) {
            if(month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October") {
                if(date > 31) {
                    month = months[d.getMonth() + 1];
                    date = date - 31;
                }
            }
            else if(month === "April" || month === "June" || month === "September" || month === "November") {
                if(date > 30) {
                    month = months[d.getMonth() + 1];
                    date = date - 30;
                }
            }
            else if(month === "February") {
                if(year % 400 === 0) {
                    if(date > 29) {
                        month = months[d.getMonth() + 1];
                        date = date - 29;
                    }
                    else {
                        month = months[d.getMonth() + 1];
                        date = date - 28;
                    }
                }
            }
            else if(month === "December") {
                if(date > 31) {
                    month = "January"
                    date = date - 31;
                    year = year + 1;
                }
            }
        } 

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
                console.log("WEATHER INFO",result);
            });
            fetch(`${api.base2}direct?q=${query}&APPID=${api.key}`)
            .then(res2 => res2.json())
            .then(result2 => {
                console.log("LONG&LAT INFO",result2);
                fetch(`${api.base}forecast?lat=${result2[0].lat}&lon=${result2[0].lon}&APPID=${api.key}`)
                .then(res3 => res3.json())
                .then(result3 => {
                console.log("FORECAST INFO",result3);
                });
                setQuery('');
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
                    <div className='forecast'>
                        <div className='forecast-day'>
                            <div className='date'>
                                {forecastDateBuilder(new Date(), 1)}
                                <div className='forecast-temp'>
                                    {Math.round(weather.main.temp)}°C | {Math.round((weather.main.temp * 1.8) + 32)}°F
                                </div>
                            </div>
                        </div>
                        <div className='forecast-day'>
                            <div className='date'>
                                {forecastDateBuilder(new Date(), 2)}
                                <div className='forecast-temp'>
                                    {Math.round(weather.main.temp)}°C | {Math.round((weather.main.temp * 1.8) + 32)}°F
                                </div>
                            </div>
                        </div>
                        <div className='forecast-day'>
                            <div className='date'>
                                {forecastDateBuilder(new Date(), 3)}
                                <div className='forecast-temp'>
                                    {Math.round(weather.main.temp)}°C | {Math.round((weather.main.temp * 1.8) + 32)}°F
                                </div>
                            </div>
                        </div>
                        <div className='forecast-day'>
                            <div className='date'>
                                {forecastDateBuilder(new Date(), 4)}
                                <div className='forecast-temp'>
                                    {Math.round(weather.main.temp)}°C | {Math.round((weather.main.temp * 1.8) + 32)}°F
                                </div>
                            </div>
                        </div>
                        <div className='forecast-day'>
                            <div className='date'>
                                {forecastDateBuilder(new Date(), 5)}
                                <div className='forecast-temp'>
                                    {Math.round(weather.main.temp)}°C | {Math.round((weather.main.temp * 1.8) + 32)}°F
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='filler'>
                </div>
                )}
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