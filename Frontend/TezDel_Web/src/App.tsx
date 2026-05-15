
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import PageTransition from './components/PageTransition';
import FloatingNav from './components/FloatingNav';

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
import './home-v3.css';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/food" element={<PageTransition><Food /></PageTransition>} />
        <Route path="/grocery" element={<PageTransition><Grocery /></PageTransition>} />
        <Route path="/home-chefs" element={<PageTransition><HomeChefs /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/investor" element={<PageTransition><Investor /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/legal" element={<PageTransition><Legal /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <SmoothScroll />
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <FloatingNav />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
