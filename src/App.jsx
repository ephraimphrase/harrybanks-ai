import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FounderMsg from './components/FounderMsg';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <FounderMsg />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
