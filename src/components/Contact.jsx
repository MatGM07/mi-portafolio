import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'mateoalejandro02a@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=mateoalejandro02a@gmail.com',
      accent: '#D4561A'
    },
    {
      icon: <FaPhone />,
      title: 'Teléfono',
      content: '+57 320 339 4316',
      link: 'tel:+573203394316',
      accent: '#2D6A4F'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Ubicación',
      content: 'Villavicencio, Meta, CO',
      link: 'https://maps.google.com/?q=Villavicencio,Meta,Colombia',
      accent: '#7A5C3A'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mateo-alejandro-gutierrez-moreno-87760737a/',
      hoverColor: '#D4561A'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/MatGM07',
      hoverColor: '#F7F4EF'
    }
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#F7F4EF' }}>
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
            ¡Hablemos!
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
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar tus ideas y colaborar contigo!
          </p>
        </motion.div>

        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1A1612',
                marginBottom: '0.5rem'
              }}
            >
              Información de Contacto
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.97rem',
                color: '#6B6560',
                lineHeight: 1.8,
                marginBottom: '2rem'
              }}
            >
              Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme
              a través de cualquiera de estos medios.
            </p>

            {/* Tarjetas de contacto */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + 0.3 }}
                  whileHover={{ x: 4 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.1rem 1.25rem',
                    background: '#fff',
                    borderRadius: '6px',
                    borderLeft: `3px solid ${info.accent}`,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    textDecoration: 'none',
                    transition: 'box-shadow 0.25s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)'}
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
                      color: info.accent,
                      fontSize: '1rem',
                      flexShrink: 0
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#8B8480', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {info.title}
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#1A1612', fontWeight: 400 }}>
                      {info.content}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  color: '#8B8480',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem'
                }}
              >
                Sígueme
              </h4>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1rem',
                      background: '#fff',
                      borderRadius: '6px',
                      border: '0.5px solid #E0DAD0',
                      color: '#6B6560',
                      fontSize: '0.85rem',
                      fontFamily: "'Inter', sans-serif",
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = social.hoverColor; e.currentTarget.style.borderColor = social.hoverColor; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#6B6560'; e.currentTarget.style.borderColor = '#E0DAD0'; }}
                  >
                    <span style={{ fontSize: '1rem' }}>{social.icon}</span>
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
