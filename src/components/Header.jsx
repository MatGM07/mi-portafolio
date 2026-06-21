import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(28, 25, 23, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '0.5px solid rgba(58, 56, 53, 0.8)' : 'none'
      }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.95rem',
                fontWeight: 500,
                textDecoration: 'none'
              }}
            >
              <span style={{ color: '#F7F4EF' }}>MateoGutierrez</span>
            </a>
          </motion.div>

          {/* Nav desktop */}
          <div className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 + 0.4 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: '#8B8480',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                  position: 'relative'
                }}
                className="nav-link"
                onMouseEnter={e => e.currentTarget.style.color = '#F7F4EF'}
                onMouseLeave={e => e.currentTarget.style.color = '#8B8480'}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('#contact')}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#F7F4EF',
                background: '#D4561A',
                border: 'none',
                borderRadius: '4px',
                padding: '0.45rem 1.1rem',
                cursor: 'pointer',
                letterSpacing: '0.02em'
              }}
            >
              Contáctame
            </motion.button>
          </div>

          {/* Botón menú móvil */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'none',
              border: 'none',
              color: '#F7F4EF',
              fontSize: '1.25rem',
              cursor: 'pointer',
              display: 'none'
            }}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                overflow: 'hidden',
                marginTop: '1rem',
                backgroundColor: 'rgba(28, 25, 23, 0.98)',
                borderRadius: '6px',
                border: '0.5px solid #3A3835'
              }}
            >
              <div style={{ padding: '0.75rem' }}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    style={{
                      display: 'block',
                      padding: '0.65rem 1rem',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      color: '#8B8480',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#F7F4EF'; e.currentTarget.style.backgroundColor = 'rgba(247,244,239,0.04)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#8B8480'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    width: 'calc(100% - 2rem)',
                    margin: '0.5rem 1rem',
                    padding: '0.65rem',
                    background: '#D4561A',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => scrollToSection('#contact')}
                >
                  Contáctame
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
