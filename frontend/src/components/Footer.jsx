import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo, socialLinks } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'github':
        return <Github size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return <Mail size={20} />;
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-800 dark:bg-cyan-400 text-white dark:text-gray-900 rounded-lg flex items-center justify-center font-bold text-xl">
                KA
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {personalInfo.designation}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Passionate about delivering high-quality software through comprehensive testing, 
              automation, and quality assurance best practices.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail size={16} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-800 dark:hover:text-cyan-400 transition-colors duration-200">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone size={16} />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  {getIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-400 text-sm">Manual Testing</li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">Test Automation</li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">API Testing</li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">Performance Testing</li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">QA Consulting</li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">Bug Tracking</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-blue-800 dark:hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-800 dark:hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </footer>
  );
};

export default Footer;