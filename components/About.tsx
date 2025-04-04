"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-px bg-synth-green"></div>
            <span className="text-synth-green font-mono text-sm">01</span>
          </motion.div>

          <motion.h2 
            className="section-title synth-decor-line pl-8 mb-12"
            variants={itemVariants}
          >
            О студии
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <div className="synth-card">
                <h3 className="section-subtitle mb-4">Новое поколение</h3>
                <p className="mb-4 text-synth-white/80 leading-relaxed">
                  Мы — полностью децентрализованная автономная студия дизайна нового поколения, 
                  коллаборативная сеть опытных дизайнеров. Каждый участник команды способен работать 
                  как независимо, так и в составе группы.
                </p>
                <p className="text-synth-white/80 leading-relaxed">
                  Это позволяет нам предоставлять прямые, эффективные решения без традиционной иерархии, 
                  а клиенты получают доступ к опытным дизайнерам, которые берут полную ответственность 
                  за свои проекты — от стратегии до исполнения.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="synth-card">
                <h3 className="section-subtitle mb-4">Опыт и квалификация</h3>
                <p className="mb-6 text-synth-white/80 leading-relaxed">
                  Имея 7+ лет опыта в различных областях, включая Web3, DeFi, финтех и SaaS, 
                  наша команда создала дизайн высокого уровня для глобальных брендов и передовых стартапов.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 bg-synth-green rounded-full mr-3"></div>
                    <span>Манифест: удобство пользователя всегда в приоритете</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 bg-synth-green rounded-full mr-3"></div>
                    <span>7+ лет в UX/UI дизайне</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 bg-synth-green rounded-full mr-3"></div>
                    <span>Top Rated/Top Rated Plus на Upwork</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 py-10 synth-panel p-8"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold font-mono text-synth-white">Наш подход</h3>
                <div className="w-16 h-px bg-gradient-to-r from-synth-green to-transparent"></div>
              </div>
              <p className="text-lg text-synth-white/80 leading-relaxed">
                Наш гибкий подход приоритизирует прозрачность, быструю итерацию и коммуникацию, 
                ориентированную на результат, что обеспечивает плавный опыт и эффективные результаты, 
                адаптированные под конкретные потребности каждого клиента.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 