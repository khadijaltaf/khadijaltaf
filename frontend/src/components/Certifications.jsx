import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { certifications } from '../mock';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [flippedCards, setFlippedCards] = useState(new Set());

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -90 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const flipCardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  const handleCardFlip = (certId) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(certId)) {
        newSet.delete(certId);
      } else {
        newSet.add(certId);
      }
      return newSet;
    });
  };

  const getStatusIcon = (cert) => {
    if (cert.status === 'upcoming') {
      return <Clock className="text-orange-500" size={20} />;
    }
    return <CheckCircle className="text-green-500" size={20} />;
  };

  const getStatusColor = (cert) => {
    if (cert.status === 'upcoming') {
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
    }
    return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
  };

  const CertificationCard = ({ cert }) => {
    const isFlipped = flippedCards.has(cert.id);
    
    return (
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="relative h-80 perspective-1000"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full preserve-3d cursor-pointer"
          onClick={() => handleCardFlip(cert.id)}
        >
          {/* Front of Card */}
          <div className="absolute inset-0 backface-hidden w-full h-full">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full overflow-hidden">
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-white/90 rounded-full">
                    {getStatusIcon(cert)}
                    <span className="text-sm font-semibold">
                      {cert.status === 'upcoming' ? 'Coming Soon' : 'Completed'}
                    </span>
                  </div>
                </div>

                {/* Award Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-white/90 rounded-full">
                    <Award className="text-blue-800" size={24} />
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-800 dark:text-cyan-400 font-semibold mb-2">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Click to flip & see skills
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back of Card */}
          <div className="absolute inset-0 backface-hidden w-full h-full" style={{ transform: 'rotateY(180deg)' }}>
            <div className="bg-gradient-to-br from-blue-800 to-cyan-600 dark:from-blue-900 dark:to-cyan-800 rounded-xl shadow-lg h-full flex flex-col justify-center items-center p-6 text-white">
              <Award size={48} className="mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4 text-center">{cert.title}</h3>
              
              <div className="space-y-2 w-full">
                <h4 className="font-semibold text-center mb-3">Skills Gained:</h4>
                {cert.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle size={14} className="text-green-300" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-blue-100">
                  Click to flip back
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
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
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment 
            to continuous learning in quality assurance and software development.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My commitment to professional development drives me to pursue relevant 
              certifications that enhance my QA expertise and keep me current with 
              industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Completed
              </h4>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                {certifications.filter(cert => cert.status !== 'upcoming').length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Certifications earned
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600 dark:text-orange-400" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                In Progress
              </h4>
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                {certifications.filter(cert => cert.status === 'upcoming').length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pursuing certification
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Planned
              </h4>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                5+
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Future certifications
              </p>
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
          <div className="bg-gradient-to-r from-blue-800 to-cyan-600 dark:from-blue-900 dark:to-cyan-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Committed to Excellence
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              These certifications represent my dedication to maintaining the highest 
              standards in software quality assurance and staying ahead of industry trends.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Discuss Your QA Needs
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for 3D flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default Certifications;