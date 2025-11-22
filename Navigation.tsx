import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold text-white tracking-tighter cursor-pointer"
        >
            Value<span className="text-blue-500">Investor</span>.
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-4">
           {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-lg font-medium text-slate-300 py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;