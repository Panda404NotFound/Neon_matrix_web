"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  // Размеры лого в зависимости от пропсов
  const dimensions = {
    sm: { width: 40, height: 40, fontSize: 'text-lg' },
    md: { width: 60, height: 60, fontSize: 'text-2xl' },
    lg: { width: 80, height: 80, fontSize: 'text-3xl' },
  };

  const { width, height, fontSize } = dimensions[size];

  return (
    <div className="relative">
      <motion.div
        className="relative flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        {/* Размытый фон под логотипом */}
        <div 
          className="absolute inset-0 bg-synth-green opacity-20 blur-md rounded-sm"
          style={{ width, height }}
        />
        
        {/* Основа логотипа */}
        <div 
          className="relative bg-synth-black/80 backdrop-blur-sm border border-synth-green flex items-center justify-center"
          style={{ width, height }}
        >
          <span className={`font-mono font-bold text-synth-green ${fontSize}`}>.s</span>
        </div>
        
        {/* Тонкая линия от логотипа */}
        <div className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-synth-green to-transparent" />
      </motion.div>
    </div>
  );
};

export default Logo; 