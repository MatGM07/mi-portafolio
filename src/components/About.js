import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobile, FaDatabase } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "React, JavaScript, HTML5, CSS3, Tailwind CSS",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaLaptopCode />,
      title: "Backend Development", 
      description: "Java, Spring Boot, Python, Django, REST APIs, C++",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaDatabase />,
      title: "Base de Datos",
      description: "PostgreSQL, MySQL, Modelado relacional, Normalización",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desarrollador apasionado con +3 años creando soluciones digitales eficaces y orientadas a resolver necesidades reales
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Información personal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              ¡Hola! Soy un desarrollador creativo
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Mi camino en la programación empezó con C++, donde adquirí bases sólidas en algoritmos y estructuras de datos. 
              Hoy en día mi fortaleza está en el desarrollo backend con Spring Boot, 
              donde disfruto diseñar aplicaciones robustas, escalables y bien estructuradas.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              A lo largo de mis proyectos he trabajado de forma constante con SQL y he aplicado Python en el desarrollo de aplicativos orientados a la ciencia y las matemáticas. 
              También he explorado Django en proyectos específicos.
              Cuando es necesario llevar mis ideas al frontend, utilizo React, junto con HTML y CSS, para complementar el backend y ofrecer una experiencia completa.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Mi enfoque siempre está en escribir código mantenible, eficiente y orientado a resultados.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h4 className="text-2xl font-bold text-blue-600">10+</h4>
                <p className="text-gray-600">Proyectos Completados</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <h4 className="text-2xl font-bold text-green-600">3+</h4>
                <p className="text-gray-600">Años de Experiencia</p>
              </div>
            </div>

        
          </motion.div>

          {/* Imagen/Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder para imagen */}
              <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                <div className="text-white text-8xl font-bold">TU</div>
              </div>
              
              {/* Decoraciones */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
            </div>
          </motion.div>
        </div>

        {/* Skills/Tecnologías */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                {skill.title}
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
              
              <div className={`mt-4 h-1 bg-gradient-to-r ${skill.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;