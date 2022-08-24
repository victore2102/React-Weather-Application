import React, { useState } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import BlankSearch from './BlankSearch';
import ForecastModalView from './ForecastModalView';
import Forecasts from './Forecasts';
import Location from './Location';
import Weather from './Weather';
import NavButton from './NavButton';


const api = {
  key: "a2afcf79342a908e248e9b85ddc69e4f",
  base: "https://api.openweathermap.org/data/2.5/",
  base2: "http://api.openweathermap.org/geo/1.0/"
}

export default function Search()
{

    const navigate = useNavigate();

    const [fromModal, setFromModal] = useState(false);

    function forecastDateBuilder(d: Date, plus: number) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[(d.getDay() + plus) % 7];

        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let date = d.getDate() + plus;

        if(plus > 0) {
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
        }

        return `${day} ${date} ${month} ${year}`
        
    }

    function dateReturnString(d: Date, plus: number) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[(d.getDay() + plus) % 7];

        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let date = d.getDate() + plus;

        if(plus > 0) {
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
        }
        return date.toString();
        
    }

    function returnDate(d: Date) {
        return d.getDate();
    }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState<{main: any, name: any, sys: any, weather: any} | undefined>(undefined);
    const [fiveDayForecast, setFiveDayForecast] = useState<{list: any} | undefined>(undefined);

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
                    setFiveDayForecast(result3);
                    console.log("FORECAST INFO",result3);
                });
                setQuery('');
            });
        }
    }

    const [tempCSS, setTempCSS] = useState('temp');
    const [forecastTempCSS1, setForecastTempCSS1] = useState('forecast-temp');
    const [forecastTempCSS2, setForecastTempCSS2] = useState('forecast-temp');
    const [forecastTempCSS3, setForecastTempCSS3] = useState('forecast-temp');
    const [forecastTempCSS4, setForecastTempCSS4] = useState('forecast-temp');
    const [forecastTempCSS5, setForecastTempCSS5] = useState('forecast-temp');
    const [modalOpen, setmodalOpen] = useState(false);
    const [modalDate, setmodalDate] = useState('');

    function forecastModal(date: number) {
        setmodalOpen(true);
        setFromModal(true);
        console.log("From forecastModal function, FromModal = ", fromModal);
        if(date > 0) {
            let display = forecastDateBuilder(new Date(), date);
            let d = dateReturnString(new Date(), date);
            forecastShown(d);
            setmodalDate(display);
        }
        else {
            let display = forecastDateBuilder(new Date(), date);
            setmodalDate(display);
        }
        
    }

    const [forecastTimes, setForecastTimes] = useState<string[]>([]);
    const [forecastTemps, setForecastTemps] = useState<string[]>([]);
    const [forecastWeather, setForecastWeather] = useState<string[]>([]);

    function forecastShown(d: string) {
        if(fiveDayForecast != undefined)
        {
            let times = [];
            let temps = [];
            let weather = [];
            for(let i = 0; i< 40; i++)
            {
                let date = fiveDayForecast.list[i].dt_txt[8] + fiveDayForecast.list[i].dt_txt[9];
                if(date === d) {
                    let time = fiveDayForecast.list[i].dt_txt[11] + fiveDayForecast.list[i].dt_txt[12];
                    let tempF = Math.round(fiveDayForecast.list[i].main.temp - 224);
                    let tempC = Math.round((tempF - 32) * .556);
                    let w = fiveDayForecast.list[i].weather[0].main;
                    times.push(`   ${time}:00  `);
                    temps.push(`${tempC}°C | ${tempF}°F`);
                    weather.push(`  ${w}    `);
                }

            }

            setForecastTimes(times);
            setForecastTemps(temps);
            setForecastWeather(weather);
            setFromModal(false);
            //console.log(times);

        }
    }

    function modalClose() {
        setmodalOpen(false);
        setForecastTimes([]);
        setmodalDate('');
        setForecastTemps([]);
        setForecastTimes([]);
        setForecastWeather([]);

    }

    return (
        <div className={(typeof weather != "undefined") ? 
        ((weather.weather[0].main === "Clouds") ? 'Search-Clouds' : 'Search' && 
        (weather.weather[0].main === "Clear") ? 'Search-Clear' : 'Search' &&
        (weather.weather[0].main === "Rain") ? 'Search-Rain' : 'Search' &&
        (weather.weather[0].main === "Mist") ? 'Search-Mist' : 'Search' &&
        (weather.weather[0].main === "Thunderstorm") ? 'Search-Thunderstorm' : 'Search')
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
                    <Location 
                    weather={weather}
                    forecastDateBuilder={forecastDateBuilder}
                    />
                    <Weather 
                    weather={weather}
                    setTempCSS={setTempCSS}
                    tempCSS={tempCSS}
                    forecastModal={forecastModal}
                    />
                    <Forecasts
                    setForecastTempCSS1={setForecastTempCSS1}
                    forecastTempCSS1={forecastTempCSS1} 
                    setForecastTempCSS2={setForecastTempCSS2}
                    forecastTempCSS2={forecastTempCSS2}
                    setForecastTempCSS3={setForecastTempCSS3}
                    forecastTempCSS3={forecastTempCSS3}
                    setForecastTempCSS4={setForecastTempCSS4}
                    forecastTempCSS4={forecastTempCSS4}
                    setForecastTempCSS5={setForecastTempCSS5}
                    forecastTempCSS5={forecastTempCSS5}
                    forecastDateBuilder={forecastDateBuilder}
                    forecastModal={forecastModal}
                    />
                    {(typeof fiveDayForecast != "undefined") ? (
                        <ForecastModalView 
                        modalOpen={modalOpen}
                        modalDate={modalDate}
                        forecastTimes={forecastTimes}
                        forecastTemps={forecastTemps}
                        forecastWeather={forecastWeather}
                        modalClose={modalClose}
                        />
                    ) : ('')}
                </div>
            ) : (
                <BlankSearch />
                )}
            <footer className='footer'>
            <NavButton 
            navigate={navigate}
            label={"Start Page"}
            location={"/"}
            />
            </footer>
        </div>
    );
}