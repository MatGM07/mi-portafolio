import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDesktop } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Agro E-commerce Platform",
      description: "Prototipo experimental de plataforma de comercio digital centrada en productos de agricultura",
      technologies: ["Java", "SpringBoot", "HTML5", "CSS"],
      category: "web",
      github: "https://github.com/MatGM07/EcommerceSpringboot",
      demo: "https://tu-ecommerce.vercel.app",
      accent: "#22C55E" // Verde
    },
    {
      id: 2,
      title: "Colegio Vanguardia",
      description: "Prototipo de diseño de portal web para el colegio Vanguardia en Villavicencio.",
      technologies: ["Java", "SpringBoot", "HTML5", "CSS"],
      category: "web",
      github: "https://github.com/MatGM07/vanguardia",
      demo: "https://play.google.com/store/apps/details?id=com.tuapp",
      accent: "#10B981" // Esmeralda
    },
    {
      id: 3,
      title: "Calculadora Metodos Numericos",
      description: "Aplicación web en django para alojar metodos numericos abiertos y cerrados.",
      technologies: ["Django", "Python", "HTML5", "CSS"],
      category: "tools",
      github: "https://github.com/MatGM07/calculadoraMetodos",
      demo: "https://tu-portfolio.vercel.app",
      accent: "#A855F7" // Morado
    },
    {
      id: 4,
      title: "Loteria Estocastica",
      description: "Aplicación ejecutable para la predicción de resultados de loteria usando cadenas de Markov.",
      technologies: ["C++"],
      category: "tools",
      github: "https://github.com/MatGM07/loteriaEstocastica",
      demo: "https://weather-dashboard-demo.vercel.app",
      accent: "#F97316" // Naranja
    },
    {
      id: 5,
      title: "Page Rank",
      description: "Presentación de algoritmo de recomendaciones basado en el comportamiento del usuario.",
      technologies: ["Python", "Django", "HTML5", "CSS"],
      category: "web",
      github: "https://github.com/tu-usuario/fitness-tracker",
      demo: "https://play.google.com/store/apps/details?id=com.fitness",
      accent: "#06B6D4" // Cyan
    },
    {
      id: 6,
      title: "Oscilador Estocastico",
      description: "Simulación y animación de un sistema oscilador armónico amortiguado con fuerza externa de ruido blanco.",
      technologies: ["Python"],
      category: "tools",
      github: "https://github.com/MatGM07/osciladorEstocastico",
      demo: "https://api-docs.tu-dominio.com",
      accent: "#3B82F6" // Azul
    },
    {
      id: 7,
      title: "Asistencia remota",
      description: "Solución en Java para administración y supervisión de equipos en LAN.",
      technologies: ["Java", "JavaFX"],
      category: "tools",
      github: "https://github.com/MatGM07/AdminRemoto",
      demo: "https://api-docs.tu-dominio.com",
      accent: "#6366F1" // Índigo
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: <FaCode /> },
    { id: 'web', name: 'Web', icon: <FaDesktop /> },
    { id: 'mobile', name: 'Mobile', icon: <FaMobile /> },
    { id: 'backend', name: 'Backend', icon: <FaCode /> }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#111110' }}>
      <div className="container mx-auto px-6">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: '#F7F4EF',
              marginBottom: '0.5rem'
            }}
          >
            Mis <span style={{ color: '#D4561A' }}>Proyectos</span>
          </h2>
          <div style={{ width: '36px', height: '2px', background: '#D4561A', margin: '0.75rem auto 1.5rem' }} />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: '#6B6560',
              maxWidth: '38rem',
              margin: '0 auto',
              lineHeight: 1.8
            }}
          >
            Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '3rem' }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 1.1rem',
                borderRadius: '4px',
                border: filter === category.id ? 'none' : '0.5px solid #3A3835',
                background: filter === category.id ? '#D4561A' : 'transparent',
                color: filter === category.id ? '#fff' : '#6B6560',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                fontWeight: filter === category.id ? 500 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <span style={{ fontSize: '0.75rem' }}>{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                style={{
                  background: '#1A1917',
                  borderRadius: '6px',
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '0.5px solid #2A2825',
                  borderTop: `3px solid ${project.accent}`, // Borde superior de color como acento visual
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'default'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = project.accent;
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#2A2825';
                  e.currentTarget.style.borderTopColor = project.accent; // Mantiene el borde de arriba
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Contenido (Toma el espacio disponible) */}
                <div style={{ flexGrow: 1 }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#F7F4EF',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {project.title}
                  </h3>

                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#6B6560', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.75rem',
                          color: '#A39D98',
                          background: '#242220',
                          border: '0.5px solid #3A3835',
                          padding: '3px 10px',
                          borderRadius: '4px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links (Se empujan hacia abajo automáticamente) */}
                <div
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    paddingTop: '1rem',
                    borderTop: '0.5px solid #2A2825'
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.85rem',
                      color: '#6B6560',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = project.accent}
                    onMouseLeave={e => e.currentTarget.style.color = '#6B6560'}
                  >
                    <FaGithub style={{ fontSize: '0.9rem' }} />
                    Código
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3.5rem' }}
        >
          <motion.a
            href="https://github.com/MatGM07"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              background: 'transparent',
              color: '#F7F4EF',
              border: '0.5px solid #3A3835',
              borderRadius: '4px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.25s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#D4561A';
              e.currentTarget.style.color = '#D4561A';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#3A3835';
              e.currentTarget.style.color = '#F7F4EF';
            }}
          >
            <FaGithub />
            Ver más en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;