import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import './index.css';
import './App.css';


export default function Start() {

    const navigate = useNavigate();

    return (
        <div className="Start">
        <header>
            <h3>Welcome To My Project</h3>
            <h2 className='title'>React Weather Application</h2>
        </header>
        <button
            className='Button'
            onClick={() => navigate("/search")}
        >
            Click To Begin
        </button>
        <footer>
            <h3>Created By:</h3>
            <h2>Victor Ekpenyong</h2>
            <h4>2022</h4>
        </footer>
        </div>
    );
}
