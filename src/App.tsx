import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartPage from './StartPage';
import SearchPage from './components/SearchPage';

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
