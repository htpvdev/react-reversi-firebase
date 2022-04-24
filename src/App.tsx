import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
        <Link to='/reversi'>Reversi</Link>
        <br /><br />
        <Link to='/'>TOPへ戻る</Link>
      </BrowserRouter>
    </>
  );
}

export default App;
