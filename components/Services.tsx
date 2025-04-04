"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      className="synth-card group h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-6 relative">
        <div className="absolute -top-2 -left-2 w-10 h-10 bg-synth-green/10 backdrop-blur-sm rounded-sm -z-10"></div>
        <div className="text-synth-green text-3xl">{icon}</div>
      </div>
      <h3 className="section-subtitle mb-3">{title}</h3>
      <p className="text-synth-white/80">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
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

  const services = [
    {
      title: "Web & Mobile Design",
      description: "Проекты любой сложности — от простых приложений и страниц до комплексных платформ.",
      icon: "🖥️",
    },
    {
      title: "Графический и редакционный дизайн",
      description: "Различные типы медиа и презентаций для вашего бизнеса.",
      icon: "🎨",
    },
    {
      title: "Брендинг и лого дизайн",
      description: "Комплексная разработка айдентики бренда и дизайн логотипа.",
      icon: "✒️",
    },
    {
      title: "Иллюстрация и арт",
      description: "Уникальные иллюстрации и художественные работы для ваших проектов.",
      icon: "🖌️",
    },
  ];

  return (
    <section id="services" className="section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-px bg-synth-green"></div>
            <span className="text-synth-green font-mono text-sm">02</span>
          </motion.div>

          <motion.h2 
            className="section-title synth-decor-line pl-8 mb-12"
            variants={itemVariants}
          >
            Услуги
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="synth-panel p-8 h-full"
              variants={itemVariants}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-synth-green/50"></div>
                  <h3 className="text-xl font-bold font-mono text-synth-white">Индустрии</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-synth-green">❇️</span>
                    <span className="text-synth-white/80">Web3</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-synth-green">❇️</span>
                    <span className="text-synth-white/80">Fintech</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-synth-green">❇️</span>
                    <span className="text-synth-white/80">SaaS/CRM</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-synth-green">❇️</span>
                    <span className="text-synth-white/80">AR</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-synth-green">❇️</span>
                    <span className="text-synth-white/80">Mobile apps</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="synth-panel p-8 h-full"
              variants={itemVariants}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-synth-green/50"></div>
                  <h3 className="text-xl font-bold font-mono text-synth-white">Инструменты</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-synth-green">✳️</span>
                    <span className="text-synth-white/80">Figma</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-synth-green">✳️</span>
                    <span className="text-synth-white/80">Adobe Suite</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-synth-green">✳️</span>
                    <span className="text-synth-white/80">Spline 3D</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-synth-green">✳️</span>
                    <span className="text-synth-white/80">ClipStudio Paint Pro</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 