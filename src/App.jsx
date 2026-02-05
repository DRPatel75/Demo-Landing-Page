import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
