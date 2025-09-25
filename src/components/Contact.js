import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
    icon: <FaEnvelope />,
    title: 'Email',
    content: 'mateoalejandro02a@gmail.com',
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=mateoalejandro02a@gmail.com',
    color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaPhone />,
      title: 'Teléfono',
      content: '+57 320 339 4316',
      link: 'tel:+573203394316',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Ubicación',
      content: 'Villavicencio, Meta, CO',
      link: 'https://maps.google.com/?q=Villavicenci,Meta,Colombia',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mateo-alejandro-gutierrez-moreno-87760737a/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/MatGM07',
      color: 'hover:text-gray-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ¡Hablemos!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar tus ideas y colaborar contigo!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-16">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme 
                a través de cualquiera de estos medios.
              </p>
            </div>

            {/* Tarjetas de contacto */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">{info.title}</h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-gray-800 mb-6">Sígueme</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-white rounded-xl shadow-lg text-gray-600 text-xl ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
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