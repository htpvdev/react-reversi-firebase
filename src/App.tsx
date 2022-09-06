import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import TopPage from 'components/pages/TopPage';
import GamePage from 'components/pages/GamePage';
import ReversiPage from 'components/pages/ReversiPage';
import ErrorPage from 'components/pages/ErrorPage';
import AppFlame from 'components/templates/AppFlame';

const App: React.FC = () => (
  <BrowserRouter>
    <AppFlame>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="game" element={<GamePage />} />
        <Route path="reversi" element={<ReversiPage />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </AppFlame>
  </BrowserRouter>
);

export default App;
