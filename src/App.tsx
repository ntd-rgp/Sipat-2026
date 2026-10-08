import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programacao from './pages/Programacao';
import Sorteio from './pages/Sorteio';
import './App.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto flex min-h-screen w-full max-w-[1260px] flex-col">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programacao" element={<Programacao />} />
            <Route path="/sorteio" element={<Sorteio />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;