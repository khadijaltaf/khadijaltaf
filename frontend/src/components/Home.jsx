import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Bug, TestTube, Zap } from 'lucide-react';
import { personalInfo } from '../mock';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = personalInfo.tagline;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleResumeDownload = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'Khadija-Altaf-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-cyan-400 dark:text-cyan-300 font-medium text-lg mb-2">
              Hello, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 dark:text-cyan-400 mb-2">
              {personalInfo.designation}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {personalInfo.subtitle}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="h-20 flex items-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {displayedText}
                <span className="animate-pulse text-cyan-400">|</span>
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="px-8 py-4 bg-blue-800 dark:bg-cyan-400 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-blue-900 dark:hover:bg-cyan-500 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              View Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactScroll}
              className="px-8 py-4 border-2 border-blue-800 dark:border-cyan-400 text-blue-800 dark:text-cyan-400 font-semibold rounded-lg hover:bg-blue-800 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Tool Logos */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <TestTube size={20} className="text-green-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Cypress</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Bug size={20} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Jira</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Zap size={20} className="text-orange-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">TestRail</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - QA Illustration */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Main Illustration Container */}
            <motion.div
              animate={floatingAnimation}
              className="relative w-80 h-80 sm:w-96 sm:h-96"
            >
              {/* Laptop Base */}
              <div className="absolute inset-x-8 bottom-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-lg"></div>
              
              {/* Laptop Screen */}
              <div className="absolute inset-x-4 top-8 bottom-8 bg-gray-800 rounded-lg shadow-2xl">
                <div className="absolute inset-2 bg-blue-900 rounded-lg overflow-hidden">
                  {/* Screen Content */}
                  <div className="p-4 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-green-400 rounded w-3/4"></div>
                      <div className="h-2 bg-cyan-400 rounded w-1/2"></div>
                      <div className="h-2 bg-green-400 rounded w-5/6"></div>
                      <div className="h-2 bg-red-400 rounded w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center"
            >
              <TestTube size={20} className="text-green-600 dark:text-green-400" />
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center"
            >
              <Bug size={20} className="text-blue-600 dark:text-blue-400" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 -left-8 w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center"
            >
              <Zap size={16} className="text-orange-600 dark:text-orange-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-gray-400 dark:text-gray-600" />
      </motion.div>
    </div>
  );
};

export default Home;