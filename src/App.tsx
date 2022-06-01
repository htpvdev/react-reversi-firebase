import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Welcome from './components/Welcome';
import Reversi from './components/reversi/Reversi';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/reversi' element={<Reversi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
