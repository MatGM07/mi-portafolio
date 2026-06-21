import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen text-white relative overflow-hidden"
      style={{ backgroundColor: '#1C1917' }}
    >
      {/* Línea de acento superior — reemplaza las burbujas blur */}
      <div
        className="absolute top-0 left-0 w-full h-0.5"
        style={{ background: 'linear-gradient(90deg, #D4561A 0%, #8B3A0F 60%, transparent 100%)' }}
      />

      {/* Grid de fondo sutil */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#F7F4EF 1px, transparent 1px), linear-gradient(90deg, #F7F4EF 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#8B8480', marginBottom: '0.75rem', letterSpacing: '0.05em' }}
            >
              Hola, soy
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                fontWeight: 700,
                color: '#F7F4EF',
                lineHeight: 1.05,
                marginBottom: '0.5rem'
              }}
            >
              Mateo Gutierrez
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
              style={{
                height: '2px',
                background: '#D4561A',
                width: '48px',
                margin: '1rem auto 1.25rem',
                transformOrigin: 'left'
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mb-10"
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#8B8480',
                marginBottom: '1.25rem'
              }}
            >
              Desarrollador Full Stack
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.05rem',
                color: '#6B6560',
                maxWidth: '36rem',
                margin: '0 auto',
                lineHeight: 1.8
              }}
            >
              Creando soluciones digitales robustas y eficientes, con código mantenible y una estructura organizada.
              Especializado en desarrollo Backend con Spring Boot.
            </p>
          </motion.div>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.8rem 2rem',
                background: '#D4561A',
                color: '#fff',
                borderRadius: '4px',
                border: 'none',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '0.95rem',
                cursor: 'pointer',
                letterSpacing: '0.02em'
              }}
              onClick={scrollToAbout}
            >
              Ver mi trabajo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(247,244,239,0.06)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.8rem 2rem',
                background: 'transparent',
                color: '#F7F4EF',
                borderRadius: '4px',
                border: '1px solid #3A3835',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FaDownload style={{ fontSize: '0.85rem' }} />
              Descargar CV
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.7 }}
            className="flex justify-center gap-6 mb-16"
          >
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/MatGM07"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#6B6560', fontSize: '1.5rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F7F4EF'}
              onMouseLeave={e => e.currentTarget.style.color = '#6B6560'}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.linkedin.com/in/mateo-alejandro-gutierrez-moreno-87760737a/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#6B6560', fontSize: '1.5rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4561A'}
              onMouseLeave={e => e.currentTarget.style.color = '#6B6560'}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>

          {/* Scroll arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              onClick={scrollToAbout}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#3A3835' }}
            >
              <FaArrowDown style={{ fontSize: '1.1rem' }} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
