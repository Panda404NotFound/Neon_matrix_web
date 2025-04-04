"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Основная сетка */}
      <div className="grid-background" />
      
      {/* Динамический эффект размытия, следующий за курсором */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[-1]"
        animate={{
          backgroundImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 133, 0.03), transparent 70%)`
        }}
        transition={{ duration: 0.2, ease: "linear" }}
      />
      
      {/* Эффект градиента при прокрутке */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1] opacity-20"
        style={{ 
          background: `linear-gradient(180deg, 
            rgba(0, 255, 133, ${Math.max(0, 0.05 - scrollY * 0.0001)}) 0%, 
            rgba(15, 15, 15, 1) 100%)` 
        }}
      />
      
      {/* Орнаментальные элементы */}
      <div className="fixed top-[20%] right-[10%] w-36 h-36 bg-synth-green/5 blur-3xl rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[30%] left-[5%] w-64 h-64 bg-synth-green/5 blur-3xl rounded-full pointer-events-none z-[-1]" />
      
      {/* Шум для текстуры */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.015]"
        style={{ 
          backgroundImage: `url('/noise.svg')`,
          backgroundRepeat: 'repeat',
        }}
      />
    </>
  );
};

export default BackgroundEffect; 