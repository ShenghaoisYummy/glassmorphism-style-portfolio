'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/data/content';

const HeroSection = () => {
  return (
    <section
      id="top"
      className="page-scroll min-h-screen flex items-center justify-center px-8"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-gray-800"
            >
              {personalInfo.title}
              <span className="inline-block ml-2 animate-wave">👋</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex gap-4"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </button>
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Resume
              </button>
            </motion.div>
          </div>

          {/* Decorative Images */}
          <div className="flex-1 relative hidden lg:block">
            {/* Floating Shapes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-20 right-60"
            >
              <Image
                src="/assets/Vector 10.png"
                alt="Vector 10"
                width={80}
                height={80}
                className="floating-shape"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute top-32 right-80 w-16 h-16"
            >
              <Image
                src="/assets/Vector 11.png"
                alt="Vector 11"
                width={64}
                height={64}
                className="floating-shape"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute top-32 right-60 w-16 h-16"
            >
              <Image
                src="/assets/Vector 16.png"
                alt="Vector 16"
                width={64}
                height={64}
                className="floating-shape"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute top-96 right-36 z-10"
            >
              <Image
                src="/assets/Vector 10.png"
                alt="Vector 10"
                width={80}
                height={80}
                className="floating-shape"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="absolute top-[400px] right-52 w-16 h-16 z-10"
            >
              <Image
                src="/assets/Vector 27.png"
                alt="Vector 27"
                width={64}
                height={64}
                className="floating-shape"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="absolute top-[416px] right-36 w-8 h-8 z-10"
            >
              <Image
                src="/assets/Vector 11.png"
                alt="Vector 11"
                width={32}
                height={32}
                className="floating-shape"
              />
            </motion.div>

            {/* Main Character Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="relative z-20"
            >
              <Image
                src="/assets/APS-OCTOCAT.png"
                alt="Character"
                width={400}
                height={400}
                className="max-w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
