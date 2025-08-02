import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap, Briefcase, Code, TestTube } from 'lucide-react';
import { personalInfo } from '../mock';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  const infoCards = [
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Mail, label: 'Email', value: personalInfo.email },
    { icon: Briefcase, label: 'Experience', value: personalInfo.experience },
    { icon: GraduationCap, label: 'Education', value: personalInfo.education }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate QA Engineer dedicated to ensuring software excellence through 
            comprehensive testing and innovative automation solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-80 h-96 object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800/20 to-transparent"></div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center shadow-lg"
              >
                <TestTube size={24} className="text-cyan-600 dark:text-cyan-400" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center shadow-lg"
              >
                <Code size={20} className="text-green-600 dark:text-green-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quality-Driven Professional
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                With over 3 years of experience in Software Quality Assurance, I specialize in 
                creating robust testing frameworks and automation solutions that ensure exceptional 
                software quality. My expertise spans functional testing, API testing, and 
                end-to-end automation using cutting-edge tools like Cypress and Selenium.
              </p>
            </div>

            <div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                I believe in a systematic approach to QA, combining manual testing expertise 
                with powerful automation to deliver bug-free, user-friendly applications. 
                My background in mathematics provides me with strong analytical and 
                problem-solving skills that I leverage to identify edge cases and 
                ensure comprehensive test coverage.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-800 dark:text-cyan-400 mb-3">
                Beyond QA
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                When I'm not hunting bugs, I enjoy exploring UI/UX design principles and 
                expanding my full-stack development skills with the MERN stack. This diverse 
                background helps me understand the complete software development lifecycle 
                and collaborate effectively with development teams.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {infoCards.map((card, index) => (
            <motion.div
              key={card.label}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <card.icon size={24} className="text-blue-800 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {card.label}
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {card.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-800 to-cyan-600 dark:from-blue-900 dark:to-cyan-800 rounded-2xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Test Cases Automated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-blue-100">Bug Escape Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-100">Critical Bugs Found</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;