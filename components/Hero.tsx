"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center items-center">
      {/* Декоративный элемент */}
      <div className="absolute right-0 top-1/4 h-40 w-px bg-gradient-to-b from-transparent via-synth-green/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <div className="flex justify-center mb-6">
              <Logo size="lg" />
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-3 text-synth-white">
              <span className="synth-gradient-text">.synth</span>
            </h1>
            <p className="text-xl md:text-2xl font-mono text-synth-gray-light">
              Decentralized UX/UI Design & Engineering
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg md:text-xl mb-10 text-synth-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Полностью децентрализованная автономная студия дизайна нового поколения — 
            коллаборативная сеть опытных дизайнеров.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <a href="#about" className="btn-primary">
              О нас
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Связаться
            </a>
          </motion.div>
        </div>

        {/* Фоновый элемент с блюром (синтетическая структура) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <div className="relative synth-panel py-2 px-6 bg-opacity-30">
            <div className="absolute inset-0 bg-synth-green/5 backdrop-blur-lg -z-10"></div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-synth-green animate-pulse"></div>
              <span className="text-sm font-mono text-synth-green/80">Синтетические связи. Человеческий подход.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 