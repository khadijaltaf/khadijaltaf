import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, TrendingUp } from 'lucide-react';
import { education } from '../mock';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const getStatusColor = (status) => {
    if (status === 'ongoing') {
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    }
    return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
  };

  const EducationCard = ({ edu }) => (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Education Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={edu.image}
          alt={edu.institution}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(edu.status)}`}>
            {edu.status === 'ongoing' ? 'In Progress' : 'Completed'}
          </span>
        </div>

        {/* Institution Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">
            {edu.degree}
          </h3>
          <p className="text-blue-200 font-semibold">
            {edu.institution}
          </p>
        </div>
      </div>

      {/* Education Content */}
      <div className="p-6">
        {/* Period and Location */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
            <Calendar size={14} />
            <span>{edu.period}</span>
          </div>
          {edu.gpa && (
            <div className="flex items-center gap-1 text-sm font-semibold text-blue-800 dark:text-cyan-400">
              <TrendingUp size={14} />
              <span>{edu.gpa}</span>
            </div>
          )}
        </div>

        {/* Minor/Focus */}
        {edu.minor && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Minor:</span> {edu.minor}
            </p>
          </div>
        )}

        {edu.focus && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Current Focus:
            </h4>
            <div className="space-y-1">
              {edu.focus.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <BookOpen size={12} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {edu.achievements && (
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Award size={16} />
              Achievements
            </h4>
            <div className="space-y-1">
              {edu.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <Award size={12} />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

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
            Educational Background
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey has provided me with strong analytical foundations 
            and continuous learning experiences that enhance my QA expertise.
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {education.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </motion.div>

        {/* Academic Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How My Education Enhances My QA Work
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My mathematical background and ongoing software development studies provide 
              unique advantages in quality assurance and testing methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Analytical Thinking
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Mathematics degree developed strong logical reasoning and 
                problem-solving skills essential for identifying edge cases 
                and creating comprehensive test scenarios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-green-600 dark:text-green-400" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Statistical Knowledge
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Statistics and physics minor provides foundation for 
                understanding test coverage metrics, defect analysis, 
                and quality measurement techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-purple-600 dark:text-purple-400" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Continuous Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Currently pursuing software development studies to deepen 
                technical understanding and bridge the gap between 
                development and QA teams.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-800 to-cyan-600 dark:from-blue-900 dark:to-cyan-800 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Lifelong Learning Philosophy
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                I believe that education doesn't end with formal degrees. The rapidly 
                evolving tech industry demands continuous learning and adaptation. 
                My academic foundation combined with ongoing professional development 
                keeps me at the forefront of QA best practices.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">3.70</div>
                  <div className="text-blue-200 text-sm">University GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-blue-200 text-sm">Courses Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">∞</div>
                  <div className="text-blue-200 text-sm">Learning Goals</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <div className="w-48 h-48 border-4 border-blue-300 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <BookOpen size={48} className="text-white" />
                  </div>
                </div>
                
                {/* Floating education icons */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center"
                >
                  <GraduationCap size={16} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-0 right-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center"
                >
                  <Award size={16} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Education Meets Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              My educational background in mathematics combined with hands-on QA experience 
              creates a unique perspective that benefits every testing project I undertake.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-blue-800 dark:bg-cyan-400 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-blue-900 dark:hover:bg-cyan-500 transition-colors duration-200"
            >
              Let's Collaborate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;