'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills } from '@/data/content';

const SkillsSection = () => {
  return (
    <section id="about" className="page-scroll py-20 px-8">
      <div className="container mx-auto max-w-full lg:max-w-7xl">
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
              priority={true}
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
              <span className="tracking-[2px] px-[5px] bg-gradient-to-b from-transparent from-50% to-[#ff6db7] to-50%">
                <span className="text-black">What I do</span>
              </span>
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xxl lg:text-2xl text-gray-600 font-normal mb-8"
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
              className="mb-12 -ml-4"
            >
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-start">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex flex-col items-center justify-center space-y-2 cursor-pointer w-20 h-20"
                  >
                    <div className="relative flex items-center justify-center w-12 h-12">
                      {/* DevIcon */}
                      <i
                        className={`${skill.icon} text-4xl text-gray-500 group-hover:text-[var(--hover-color)] transition-colors duration-300`}
                        style={
                          {
                            '--hover-color': skill.hoverColor,
                          } as React.CSSProperties
                        }
                      ></i>
                    </div>
                    <p className="text-xs text-gray-500 group-hover:text-purple-600 transition-colors duration-300 font-medium text-center leading-tight">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
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
                'Developed highly interactive front-end modules for integration platform using React.js, Redux, HTML/CSS and Tailwind CSS, delivering seamless web and mobile user experiences.',
                'Created responsive, production-ready web applications with Next.js, React Hook Form and Zod, and deployed them on AWS EC2/S3 for scalable, low-latency hosting.',
                'Built robust back-end systems and RESTful APIs with .NET Core and Node.js—complete with unit testing and GitHub Actions CI/CD pipelines—to ensure reliable, maintainable application architecture.',
              ].map((text, index) => (
                <p
                  key={index}
                  className="flex items-start text-gray-600 text-lg"
                >
                  <Image
                    alt="⚡"
                    src="/assets/icons8-lightning-48.png"
                    width={20}
                    height={20}
                    className="w-8 h-8 mr-3 mt-1 flex-shrink-0"
                    priority={false}
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
