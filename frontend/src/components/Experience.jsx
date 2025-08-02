import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experience } from '../mock';

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: "100%",
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const ExperienceCard = ({ exp, index, isLast }) => (
    <motion.div
      variants={itemVariants}
      className="relative flex gap-8 pb-12"
    >
      {/* Timeline */}
      <div className="relative flex flex-col items-center">
        {/* Timeline dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
          className="w-4 h-4 bg-blue-800 dark:bg-cyan-400 rounded-full z-10 shadow-lg"
        />
        
        {/* Timeline line */}
        {!isLast && (
          <div className="w-0.5 bg-gray-300 dark:bg-gray-600 absolute top-4 h-full">
            <motion.div
              variants={timelineVariants}
              className="w-full bg-blue-800 dark:bg-cyan-400"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {exp.title}
              </h3>
              <p className="text-lg font-semibold text-blue-800 dark:text-cyan-400">
                {exp.company}
              </p>
            </div>
            <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-1">
                <Calendar size={14} />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={14} />
                <span>{exp.location}</span>
                <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-cyan-400 text-xs rounded-full">
                  {exp.type}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {exp.description}
          </p>

          {/* Achievements */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Briefcase size={16} />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                >
                  <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A journey through my career in software quality assurance, showcasing growth, 
            achievements, and the impact I've made in each role.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {experience.map((exp, index) => (
            <ExperienceCard 
              key={exp.id} 
              exp={exp} 
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-800 to-cyan-600 dark:from-blue-900 dark:to-cyan-800 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Career Highlights</h3>
            <p className="text-blue-100">Key metrics from my professional journey</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3+</div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100 text-sm">Tests Automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-blue-100 text-sm">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100 text-sm">Team Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new projects and collaborate with teams 
              that are passionate about delivering high-quality software solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-blue-800 dark:bg-cyan-400 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-blue-900 dark:hover:bg-cyan-500 transition-colors duration-200"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;