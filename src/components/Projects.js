import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDesktop } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras, pagos seguros y panel de administración.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      github: "https://github.com/tu-usuario/ecommerce",
      demo: "https://tu-ecommerce.vercel.app",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación móvil para gestión de tareas con sincronización en tiempo real y colaboración en equipo.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "mobile",
      github: "https://github.com/tu-usuario/task-app",
      demo: "https://play.google.com/store/apps/details?id=com.tuapp",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Sitio web personal moderno con animaciones fluidas y diseño responsive para mostrar proyectos.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: "web",
      github: "https://github.com/tu-usuario/portfolio",
      demo: "https://tu-portfolio.vercel.app",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Dashboard interactivo del clima con gráficos en tiempo real y predicciones para múltiples ciudades.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
      category: "web",
      github: "https://github.com/tu-usuario/weather-app",
      demo: "https://weather-dashboard-demo.vercel.app",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Aplicación móvil para seguimiento de ejercicios con métricas detalladas y planes personalizados.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Dart", "SQLite"],
      category: "mobile",
      github: "https://github.com/tu-usuario/fitness-tracker",
      demo: "https://play.google.com/store/apps/details?id=com.fitness",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 6,
      title: "API REST Authentication",
      description: "API robusta con autenticación JWT, rate limiting y documentación completa con Swagger.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Express", "JWT", "Swagger"],
      category: "backend",
      github: "https://github.com/tu-usuario/auth-api",
      demo: "https://api-docs.tu-dominio.com",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: <FaCode /> },
    { id: 'web', name: 'Web', icon: <FaDesktop /> },
    { id: 'mobile', name: 'Mobile', icon: <FaMobile /> },
    { id: 'backend', name: 'Backend', icon: <FaCode /> }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Proyectos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  
                  {/* Enlaces overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <FaGithub />
                      Código
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/MatGM07"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            Ver más en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;