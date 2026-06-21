import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaDatabase, FaCloud, FaBrain } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "React, JavaScript, HTML5, CSS3, Tailwind CSS",
      accent: "#D4561A"
    },
    {
      icon: <FaLaptopCode />,
      title: "Backend Development",
      description: "Java, Spring Boot, Python, Django, REST APIs, C++",
      accent: "#2D6A4F"
    },
    {
      icon: <FaDatabase />,
      title: "Base de Datos",
      description: "PostgreSQL, MySQL, Modelado relacional, Normalización",
      accent: "#7A5C3A"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing",
      description: "Microsoft Azure (Virtual Machines / VMs), Google Cloud Platform (GCP), Google Cloud Skills Boost",
      accent: "#007FFF"
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning (Académico)",
      description: "Orquestación de ML, Fundamentos de tuberías de datos (Data Pipelines), Evaluación de modelos",
      accent: "#8A2BE2"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#F7F4EF' }}>
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
              color: '#1A1612',
              marginBottom: '0.5rem'
            }}
          >
            Sobre <span style={{ color: '#D4561A' }}>Mí</span>
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
            Desarrollador de software enfocado en el diseño, arquitectura y despliegue de soluciones lógicas y eficientes
          </p>
        </motion.div>

        {/* Contenedor ajustado sin el grid de 2 columnas */}
        <div className="max-w-4xl mx-auto mb-20">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#1A1612',
                marginBottom: '0.25rem'
              }}
            >
              ¡Hola!
            </h3>

            {[
              `Soy un desarrollador enfocado en el diseño y despliegue de aplicaciones. Mi fuerte es el desarrollo backend con Spring Boot y el modelado de bases de datos con SQL, manteniendo siempre la lógica estructurada que aprendí en mis inicios con C++.`,
              `Constantemente busco llevar mis proyectos un paso más allá, lo que me ha llevado a gestionar infraestructura en la nube, específicamente configurando Máquinas Virtuales (VMs) en Azure y explorando Google Cloud Platform a través de sus Skills Boost. Asimismo, cuento con bases académicas en Python aplicado a proyectos de Machine Learning y orquestación de datos.`,
              `Cuando los proyectos lo requieren, complemento el backend desarrollando interfaces con React, HTML y CSS. Me apasiona la automatización, el código limpio y encontrar soluciones lógicas a problemas complejos`
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.97rem',
                  color: '#6B6560',
                  lineHeight: 1.85
                }}
              >
                {text}
              </p>
            ))}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              {[
                { num: '10+', label: 'Proyectos Completados', accent: '#D4561A' },
                { num: '3+', label: 'Años de Experiencia', accent: '#2D6A4F' }
              ].map(({ num, label, accent }) => (
                <div
                  key={label}
                  style={{
                    background: '#fff',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '6px',
                    borderLeft: `3px solid ${accent}`,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
                  }}
                >
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700, color: accent }}>
                    {num}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#6B6560', marginTop: '2px' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '6px',
                borderLeft: `3px solid ${skill.accent}`,
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.25s ease',
                cursor: 'default'
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#F7F4EF',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: skill.accent,
                  fontSize: '1.1rem',
                  marginBottom: '1rem'
                }}
              >
                {skill.icon}
              </div>

              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: '#1A1612',
                  marginBottom: '0.4rem'
                }}
              >
                {skill.title}
              </h4>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.83rem', color: '#8B8480', lineHeight: 1.7 }}>
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;