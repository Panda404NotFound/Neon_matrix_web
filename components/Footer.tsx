"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-synth-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-synth-white/60 text-sm max-w-xs">
              Дизайн-студия специализирующаяся на создании уникальных цифровых интерфейсов и брендов.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/synthdesign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-sm border border-synth-white/20 hover:border-synth-green transition-colors duration-300"
              >
                <span className="text-synth-white/80 hover:text-synth-green transition-colors duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
              </a>
              <a 
                href="https://behance.net/synthdesign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-sm border border-synth-white/20 hover:border-synth-green transition-colors duration-300"
              >
                <span className="text-synth-white/80 hover:text-synth-green transition-colors duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </span>
              </a>
              <a 
                href="mailto:hello@synthdesign.io" 
                className="w-10 h-10 flex items-center justify-center rounded-sm border border-synth-white/20 hover:border-synth-green transition-colors duration-300"
              >
                <span className="text-synth-white/80 hover:text-synth-green transition-colors duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-mono mb-6 text-synth-white">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-synth-white/60 hover:text-synth-green transition-colors duration-300">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-synth-white/60 hover:text-synth-green transition-colors duration-300">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-synth-white/60 hover:text-synth-green transition-colors duration-300">
                  Проекты
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-synth-white/60 hover:text-synth-green transition-colors duration-300">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-mono mb-6 text-synth-white">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-synth-white/60 hover:text-synth-green transition-colors duration-300">
                  UI/UX Дизайн
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-synth-white/60 hover:text-synth-green transition-colors duration-300">
                  Брендинг
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-synth-white/60 hover:text-synth-green transition-colors duration-300">
                  Иллюстрация
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-mono mb-6 text-synth-white">Контакты</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <span className="text-synth-green mr-3">📧</span>
                <span className="text-synth-white/60">hello@synthdesign.io</span>
              </li>
              <li className="flex items-start">
                <span className="text-synth-green mr-3">📱</span>
                <span className="text-synth-white/60">@synthdesign</span>
              </li>
              <li className="flex items-start">
                <span className="text-synth-green mr-3">📍</span>
                <span className="text-synth-white/60">Санкт-Петербург, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-synth-white/10 text-center">
          <p className="text-sm text-synth-white/40">
            © {currentYear} .synth. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 