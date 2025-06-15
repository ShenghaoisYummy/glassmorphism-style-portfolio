'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { personalInfo } from '@/data/content';

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: personalInfo.socialLinks.github,
      color: 'hover:bg-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: personalInfo.socialLinks.linkedin,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'X',
      icon: faXTwitter,
      url: personalInfo.socialLinks.X,
      color: 'hover:bg-black',
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: personalInfo.socialLinks.instagram,
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block"
    >
      <div className="flex flex-col space-y-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`w-16 h-16 rounded-full bg-white/70 backdrop-blur-lg border-2 border-white/50 flex items-center justify-center text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:text-white shadow-lg ${social.color}`}
            title={social.name}
          >
            <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialSidebar;
