import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TopPage from 'components/pages/TopPage';
import ReversiPage from 'components/pages/ReversiPage';
import { useState } from 'react';
import GamePage from 'components/pages/GamePage';
import ErrorPage from 'components/pages/ErrorPage';
import AppFlame from './components/templates/AppFlame';

const App: React.FC = () => {
  const [title, setTitle] = useState<string | null>(null);

  return (
    <BrowserRouter>
      <AppFlame title={title}>
        <Routes>
          <Route path="/" element={<TopPage setTitle={setTitle} />} />
          <Route path="game" element={<GamePage setTitle={setTitle} />} />
          <Route
            path="reversi"
            element={<ReversiPage setTitle={setTitle} pageMode="dialog" />}
          />
          <Route path="error" element={<ErrorPage setTitle={setTitle} />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </AppFlame>
    </BrowserRouter>
  );
};

export default App;
