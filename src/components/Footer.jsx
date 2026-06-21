import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/MatGM07',
      name: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/mateo-alejandro-gutierrez-moreno-87760737a/',
      name: 'LinkedIn'
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#111110', color: '#F7F4EF', position: 'relative', overflow: 'hidden' }}>
      {/* Línea de acento superior */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, #D4561A 0%, #8B3A0F 40%, transparent 100%)' }} />

      <div className="container mx-auto px-6 py-16">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>

          {/* Marca */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ gridColumn: 'span 2' }}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  marginBottom: '1rem'
                }}
              >
                <span style={{ color: '#6B6560' }}>&lt;</span>
                <span style={{ color: '#F7F4EF' }}>MateoGutierrez</span>
                <span style={{ color: '#6B6560' }}>/&gt;</span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  color: '#6B6560',
                  lineHeight: 1.85,
                  maxWidth: '22rem'
                }}
              >
                Creando soluciones digitales robustas y eficientes, con código mantenible y una estructura organizada.
                Especializado en desarrollo Backend con Spring Boot.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '38px',
                    height: '38px',
                    background: '#1C1917',
                    border: '0.5px solid #3A3835',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6B6560',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#D4561A'; e.currentTarget.style.borderColor = '#D4561A'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#6B6560'; e.currentTarget.style.borderColor = '#3A3835'; }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 500,
                color: '#8B8480',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem'
              }}
            >
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    whileHover={{ x: 4 }}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      color: '#6B6560',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'block'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F7F4EF'}
                    onMouseLeave={e => e.currentTarget.style.color = '#6B6560'}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 500,
                color: '#8B8480',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem'
              }}
            >
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: '#6B6560', marginBottom: '2px' }}>Email</div>
                <a
                  href="mailto:mateoalejandro02a@gmail.com"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.83rem',
                    color: '#8B8480',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#D4561A'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8B8480'}
                >
                  mateoalejandro02a@gmail.com
                </a>
              </div>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: '#6B6560', marginBottom: '2px' }}>Ubicación</div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.83rem', color: '#8B8480' }}>Villavicencio, Meta, CO</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: '#6B6560', marginBottom: '4px' }}>Estado</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div
                    style={{
                      width: '7px',
                      height: '7px',
                      background: '#2D6A4F',
                      borderRadius: '50%',
                      animation: 'pulse 2s infinite'
                    }}
                  />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.83rem', color: '#8B8480' }}>Disponible para proyectos</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '0.5px solid #2A2825',
            textAlign: 'center'
          }}
        >
          <h4
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#F7F4EF',
              marginBottom: '0.75rem'
            }}
          >
            ¿Tienes un proyecto en mente?
          </h4>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              color: '#6B6560',
              marginBottom: '1.5rem',
              maxWidth: '32rem',
              margin: '0 auto 1.5rem'
            }}
          >
            Estoy siempre interesado en nuevos desafíos y oportunidades de colaboración.
          </p>
          <motion.button
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.75rem 2rem',
              background: '#D4561A',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Iniciar Conversación
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#0D0C0C', padding: '1.25rem 0', borderTop: '0.5px solid #1A1917' }}>
        <div className="container mx-auto px-6">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#6B6560' }}>
              © {new Date().getFullYear()} Mateo Gutierrez.
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '36px',
                height: '36px',
                background: '#1C1917',
                border: '0.5px solid #3A3835',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B6560',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#D4561A'; e.currentTarget.style.borderColor = '#D4561A'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6B6560'; e.currentTarget.style.borderColor = '#3A3835'; }}
              aria-label="Volver arriba"
            >
              <FaArrowUp style={{ fontSize: '0.8rem' }} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
