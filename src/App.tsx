import { ReactElement } from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartPage from './StartPage';
import SearchPage from './components/SearchPage';

const api = {
  key: "a2afcf79342a908e248e9b85ddc69e4f",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function App(): ReactElement {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}
