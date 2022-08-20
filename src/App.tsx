import React, { ReactElement } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './Start';
import Search from './components/Search';

const api = {
  key: "a2afcf79342a908e248e9b85ddc69e4f",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function App(): ReactElement {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
