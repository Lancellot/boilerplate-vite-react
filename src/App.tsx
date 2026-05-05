import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main className="bg-black min-h-screen flex-1 flex flex-col">
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};