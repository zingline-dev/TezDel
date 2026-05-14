
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Food from './pages/Food';
import Grocery from './pages/Grocery';
import HomeChefs from './pages/HomeChefs';
import Careers from './pages/Careers';
import Investor from './pages/Investor';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/food" element={<Food />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/home-chefs" element={<HomeChefs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/investor" element={<Investor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
