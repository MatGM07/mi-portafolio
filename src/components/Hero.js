import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Fondo animado con partículas */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl">
          {/* Animación de entrada del nombre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-300 mb-4 font-light"
            >
              Hola, soy
            </motion.h2>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Mateo Gutierrez
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 max-w-xs"
            ></motion.div>
          </motion.div>

          {/* Título profesional con efecto de escritura */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-4xl text-gray-300 mb-6 font-light">
              Desarrollador Full Stack
            </h3>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Creando soluciones digitales robustas y eficientes, con código mantenible y una estructura organizada.
            Especializado en desarrollo Backend con Spring Boot.
            </p>
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToAbout}
            >
              Ver mi trabajo
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-400 rounded-full text-blue-400 font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-3"
            >
              <FaDownload />
              Descargar CV
            </motion.button>
          </motion.div>

          {/* Enlaces sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex justify-center space-x-8 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/MatGM07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/mateo-alejandro-gutierrez-moreno-87760737a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>

          {/* Flecha de scroll animada */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={scrollToAbout}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaArrowDown className="text-2xl" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;