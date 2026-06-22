import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Console', href: '#console' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-white font-mono font-bold text-xl group">
            <Code2 className="w-6 h-6 text-accent-teal transition-transform group-hover:rotate-12" />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Surajit
            </span>
            <span className="text-accent-teal">.dev</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white font-medium text-sm transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-teal transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-accent-teal/30 hover:border-accent-teal text-accent-teal hover:text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] bg-accent-teal/5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-3 glass mt-2 mx-4 rounded-2xl shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center px-4 py-3 rounded-xl border border-accent-teal/30 text-accent-teal font-medium hover:bg-accent-teal hover:text-white transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
