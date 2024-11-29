import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { Prediction } from './pages/Prediction';
import { Desc } from './pages/Desc';
import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/description" element={<Desc />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/prediction" element={<Prediction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
