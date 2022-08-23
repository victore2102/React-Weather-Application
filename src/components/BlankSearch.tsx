import React, { useState } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';


export default function BlankSearch()
{


    return (
        <div>
            <div className='location-box'>
                <div className='location'>
                    __________, __________
                </div>
                <div className='date'>
                __________ __ __________ ____
                </div>
            </div>
            <div className="weather-box">
                <button className='modal-button'>
                    <div className='temp'>
                        __°C | __°F
                    </div>
                </button>
                <div className='weather-condition'>
                    __________
                </div>
            </div>
            <div className='forecast'>
                <div className='forecast-day'>
                    <button className='modal-button'>
                        <div className='date-forecast'>
                            __________ __ __________ ____
                                <div className='forecast-temp'>
                                    Forecast
                                </div>
                        </div>
                    </button>
                </div>
                <div className='forecast-day'>
                    <button className='modal-button'>
                        <div className='date-forecast'>
                            __________ __ __________ ____
                                <div className='forecast-temp'>
                                    Forecast
                                </div>
                        </div>
                    </button>
                </div>
                <div className='forecast-day'>
                    <button className='modal-button'>
                        <div className='date-forecast'>
                            __________ __ __________ ____
                                <div className='forecast-temp'>
                                    Forecast
                                </div>
                        </div>
                    </button>
                </div>
                <div className='forecast-day'>
                    <button className='modal-button'>
                        <div className='date-forecast'>
                            __________ __ __________ ____
                                <div className='forecast-temp'>
                                    Forecast
                                </div>
                        </div>
                    </button>
                </div>
                <div className='forecast-day'>
                    <button className='modal-button'>
                        <div className='date-forecast'>
                            __________ __ __________ ____
                                <div className='forecast-temp'>
                                    Forecast
                                </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}