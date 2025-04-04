"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('все');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Интерфейс Веб3 Кошелька",
      category: "ui/ux",
      image: "/images/project-1.jpg",
      description: "Минималистичный и интуитивный интерфейс для криптовалютного кошелька с акцентом на безопасность и простоту использования.",
      tags: ["UI/UX", "Web3", "Минимализм"]
    },
    {
      id: 2,
      title: "Брендинг .synth",
      category: "брендинг",
      image: "/images/project-2.jpg",
      description: "Разработка айдентики для студии дизайна .synth с фокусом на современную эстетику и технологичность.",
      tags: ["Брендинг", "Лого", "Типографика"]
    },
    {
      id: 3,
      title: "Мобильное приложение Финтех",
      category: "ui/ux",
      image: "/images/project-3.jpg",
      description: "Дизайн пользовательского интерфейса для финтех-приложения с акцентом на доступность и ясность данных.",
      tags: ["Мобильный UI", "Финтех", "Дашборд"]
    },
    {
      id: 4,
      title: "Иллюстрации Сайта",
      category: "иллюстрация",
      image: "/images/project-4.jpg",
      description: "Серия уникальных иллюстраций для технологического стартапа, объединяющих абстрактные и футуристические элементы.",
      tags: ["Иллюстрация", "Диджитал-арт", "Футуризм"]
    },
  ];

  const filters = ['все', 'ui/ux', 'брендинг', 'иллюстрация'];

  const filteredProjects = activeFilter === 'все' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-px bg-synth-green"></div>
            <span className="text-synth-green font-mono text-sm">03</span>
          </motion.div>

          <motion.h2 
            className="section-title synth-decor-line pl-8 mb-8"
            variants={itemVariants}
          >
            Проекты
          </motion.h2>

          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            variants={itemVariants}
          >
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-mono uppercase transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-synth-green/20 text-synth-green border-synth-green'
                    : 'text-synth-white/60 hover:text-synth-white border-synth-white/20 hover:border-synth-white/40'
                } border backdrop-blur-sm`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="synth-card overflow-hidden group"
                variants={itemVariants}
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-synth-black/50 backdrop-blur-[1px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 border border-synth-green text-synth-green hover:bg-synth-green/20 transition-all duration-300 backdrop-blur-sm font-mono">
                      Подробнее
                    </button>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="section-subtitle mb-2">{project.title}</h3>
                  <p className="text-synth-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-synth-green/10 text-synth-green/80 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-16"
            variants={itemVariants}
          >
            <button className="px-8 py-3 border-2 border-synth-green text-synth-green hover:bg-synth-green/20 transition-all duration-300 font-mono uppercase">
              Смотреть все проекты
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 