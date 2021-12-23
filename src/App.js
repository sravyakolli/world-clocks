import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Clock from './components/Clock';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(<Home />)} />
          <Route path="/:zone" element={(<Clock />)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
