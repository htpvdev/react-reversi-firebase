import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from 'components/Welcome';
import Reversi from 'components/reversi/Reversi';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/reversi" element={<Reversi />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
