'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/content';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: personalInfo.socialLinks.github,
      className: 'github',
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: personalInfo.socialLinks.linkedin,
      className: 'linkedin',
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      url: personalInfo.socialLinks.facebook,
      className: 'facebook',
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: personalInfo.socialLinks.instagram,
      className: 'instagram',
    },
  ];

  return (
    <section id="contact" className="page-scroll py-20 px-8">
      <div className="container max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold mb-12"
        >
          <span className="relative inline-block">
            <span className="relative z-10 text-white">Connect with me</span>
            <span className="absolute inset-0 bg-yellow-300 rounded-lg transform -skew-y-1 filter blur-sm opacity-80"></span>
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`social-icon ${social.className}`}
              title={social.name}
            >
              <i className={`${social.icon} text-lg`} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
