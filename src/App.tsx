import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main className="bg-black min-h-screen flex-1 flex flex-col">
      
      </main>
    </BrowserRouter>
  );
};