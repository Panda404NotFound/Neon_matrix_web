"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет реализация отправки формы
  };

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

  const contactInfo = [
    {
      title: "Email",
      value: "hello@synthdesign.io",
      icon: "📧",
    },
    {
      title: "Телеграм",
      value: "@synthdesign",
      icon: "📱",
    },
    {
      title: "Локация",
      value: "Санкт-Петербург, Россия",
      icon: "📍",
    },
  ];

  return (
    <section id="contact" className="section" ref={ref}>
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
            <span className="text-synth-green font-mono text-sm">04</span>
          </motion.div>

          <motion.h2 
            className="section-title synth-decor-line pl-8 mb-12"
            variants={itemVariants}
          >
            Связаться
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="synth-panel p-8"
                variants={itemVariants}
              >
                <div className="flex flex-col items-start">
                  <div className="mb-4 text-3xl">{info.icon}</div>
                  <h3 className="mb-2 text-lg font-mono text-synth-white">{info.title}</h3>
                  <p className="text-synth-white/80">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="synth-panel p-8 relative"
            variants={itemVariants}
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-synth-green/5 backdrop-blur-sm -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-synth-green/5 backdrop-blur-sm -z-10"></div>
            
            <h3 className="section-subtitle text-center mb-8">Отправить сообщение</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="block mb-2 text-sm font-mono text-synth-white/80">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="synth-input w-full"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="block mb-2 text-sm font-mono text-synth-white/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="synth-input w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="block mb-2 text-sm font-mono text-synth-white/80">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="synth-input w-full resize-none"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-synth-green text-synth-black font-mono hover:bg-synth-green/90 transition-all duration-300"
                >
                  Отправить
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 