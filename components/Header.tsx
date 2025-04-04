"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Обработка скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'О нас', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-blur border-b border-synth-gray backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Logo size="sm" />
            <div className="flex flex-col">
              <span className="font-mono font-bold text-xl text-synth-white">.synth</span>
              <span className="text-xs text-synth-gray-light">design & engineering</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-synth-white hover:text-synth-green transition-colors duration-300 text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a 
            href="#contact" 
            className="btn-outline hidden md:flex"
          >
            Связаться
          </a>

          <button
            className="md:hidden text-synth-white focus:outline-none"
            aria-label="Mobile menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 