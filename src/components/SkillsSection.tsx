'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills } from '@/data/content';

const SkillsSection = () => {
  return (
    <section id="about" className="page-scroll py-20 px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
          {/* Animated GIF */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Image
              src="https://media.giphy.com/media/7wA0YhMXvDBhTckOGM/source.gif?cid=790b7611b6565a9092ee51eeee34015858a0783fd77b6f31&rid=source.gif&ct=s"
              alt="Developer GIF"
              width={320}
              height={320}
              unoptimized
              className="w-80 h-80 object-cover rounded-lg"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 max-w-2xl bg-transparent backdrop-blur-lg border border-white/30 border-t-white/50 border-l-white/50 rounded-2xl shadow-xl p-8 lg:p-12">
            {/* SVG Filter for marker effect */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="hidden"
            >
              <defs>
                <filter id="marker-shape">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0 0.15"
                    numOctaves="1"
                    result="warp"
                  />
                  <feDisplacementMap
                    xChannelSelector="R"
                    yChannelSelector="G"
                    scale="30"
                    in="SourceGraphic"
                    in2="warp"
                  />
                </filter>
              </defs>
            </svg>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="relative inline-block">
                <span className="relative z-10 text-white">What I do</span>
                <span className="absolute inset-0 bg-pink-400 rounded-lg transform -skew-y-1 filter blur-sm opacity-80"></span>
              </span>
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl lg:text-2xl text-gray-600 font-normal mb-8"
            >
              I love all aspects of technology and want to explore as much as I
              can!
            </motion.h3>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <ul className="flex flex-wrap gap-6 text-5xl">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex flex-col items-center space-y-2 cursor-pointer"
                  >
                    <div className="relative">
                      {/* DevIcon */}
                      <i
                        className={`${skill.icon} text-gray-500 group-hover:text-[var(--hover-color)] transition-colors duration-300`}
                        style={
                          {
                            '--hover-color': skill.hoverColor,
                          } as React.CSSProperties
                        }
                      ></i>
                    </div>
                    <p className="text-xs text-gray-500 group-hover:text-purple-600 transition-colors duration-300 font-medium">
                      {skill.name}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                'Develop highly interactive Front end / User Interfaces for your web and mobile applications',
                'Create responsive and user-friendly web applications with modern frameworks',
                'Build scalable backend systems and APIs for robust application architecture',
              ].map((text, index) => (
                <p
                  key={index}
                  className="flex items-start text-gray-600 text-lg"
                >
                  <Image
                    alt="⚡"
                    src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                  />
                  {text}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
