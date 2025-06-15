'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/content';

const Header = () => {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.page-scroll');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (window.scrollY < 100) {
        setActiveSection('top');
        return;
      }

      sections.forEach(section => {
        const element = section as HTMLElement;
        const { offsetTop, offsetHeight } = element;
        const id = element.getAttribute('id') || '';

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'top', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog', external: true, url: personalInfo.blogUrl },
  ];

  const handleNavClick = (id: string, external?: boolean, url?: string) => {
    if (external && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12"
    >
      <div className="backdrop-blur-lg bg-white/40 border border-white/25 border-t-white/50 border-l-white/50 rounded-2xl shadow-xl px-8 py-4 flex justify-between items-center w-full max-w-full sm:max-w-[calc(100%-96px)] lg:max-w-[calc(100%-160px)] mx-auto">
        <a
          href="#top"
          className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
          onClick={e => {
            e.preventDefault();
            handleNavClick('top');
          }}
        >
          {personalInfo.logo}
        </a>

        <nav>
          <ul
            className="
              flex flex-wrap md:flex-nowrap
              gap-x-4 gap-y-2 md:gap-x-6
              justify-center md:justify-start
            "
          >
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() =>
                    handleNavClick(item.id, item.external, item.url)
                  }
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? 'bg-blue-500/20 text-blue-600 shadow-md'
                      : 'text-gray-700 hover:bg-white/30 hover:text-blue-600'
                  }`}
                >
                  <span className={item.id === 'blog' ? 'cyberpunk-text' : ''}>
                    {item.label}
                  </span>
                  {item.external && (
                    <svg
                      className="inline ml-1 w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
