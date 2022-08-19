import { useState } from 'react';
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
    const [weather, setWeather] = useState({});

    const find = (evt: React.KeyboardEvent) => {
        if(evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)
                setQuery('');
                console.log(result);
            });
        }
    }



    return (
        <div className="Search">
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
            {(typeof weather.main != "undefined") ? (
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
                            80°F
                        </div>
                        <div className='weather'>
                            Sunny
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