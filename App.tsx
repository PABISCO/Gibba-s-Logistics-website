import React from 'react';
import { Ship, Truck, Plane, Package, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;