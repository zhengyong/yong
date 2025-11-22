import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Investing from './components/Investing';
import Education from './components/Education';
import Flywheel from './components/Flywheel';
import Articles from './components/Articles';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Investing />
        <Education />
        <Flywheel />
        <Articles />
      </main>
      <Contact />
      <AIChat />
    </div>
  );
}

export default App;