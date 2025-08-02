import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TestTube, Bug, Code, Zap, Database, Globe } from 'lucide-react';
import { skills } from '../mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('testing');

  const categories = [
    { 
      id: 'testing', 
      name: 'Testing Skills', 
      icon: TestTube,
      color: 'from-green-500 to-emerald-600'
    },
    { 
      id: 'tools', 
      name: 'Tools & Technologies', 
      icon: Bug,
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      id: 'development', 
      name: 'Development Skills', 
      icon: Code,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  const SkillBar = ({ skill }) => (
    <motion.div
      variants={skillVariants}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h4>
        <span className="text-sm font-medium text-blue-800 dark:text-cyan-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-3">
        <motion.div
          className="h-3 bg-gradient-to-r from-blue-800 to-cyan-600 dark:from-cyan-400 dark:to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {skill.description}
      </p>
    </motion.div>
  );

  const ToolCard = ({ tool }) => (
    <motion.div
      variants={skillVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center group cursor-pointer"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
        {tool.icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {tool.name}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {tool.description}
      </p>
    </motion.div>
  );

  const getSkillIcon = (category) => {
    switch (category) {
      case 'testing':
        return <TestTube size={20} />;
      case 'tools':
        return <Zap size={20} />;
      case 'development':
        return <Code size={20} />;
      default:
        return <TestTube size={20} />;
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to ensure 
            software quality and deliver exceptional results.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-blue-800 dark:bg-cyan-400 text-white dark:text-gray-900 shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <category.icon size={20} />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory === 'testing' && 
              skills.testing.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} />
              ))
            }
            {activeCategory === 'tools' && 
              skills.tools.map((tool, index) => (
                <ToolCard key={tool.name} tool={tool} />
              ))
            }
            {activeCategory === 'development' && 
              skills.development.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} />
              ))
            }
          </motion.div>
        </AnimatePresence>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TestTube className="text-blue-800 dark:text-cyan-400" />
                Testing Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe in a comprehensive approach to quality assurance that combines 
                manual testing expertise with automated solutions. My focus is on creating 
                maintainable test suites that provide confidence in software releases while 
                enabling rapid development cycles.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="text-blue-800 dark:text-cyan-400" />
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The field of software testing is constantly evolving, and I'm committed to 
                staying current with the latest tools and methodologies. I regularly explore 
                new testing frameworks, attend webinars, and contribute to the QA community 
                through knowledge sharing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;