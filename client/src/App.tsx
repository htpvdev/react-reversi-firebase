import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'App.css';
import Welcome from 'components/Welcome';
import Reversi from 'components/reversi/Reversi';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/reversi" element={<Reversi />} />
    </Routes>
  </BrowserRouter>
);

export default App;
