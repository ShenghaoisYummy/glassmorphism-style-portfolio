'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiences, Experience } from '@/data/content';

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="experience-card bg-transparent backdrop-blur-xl border-3 border-white/60 rounded-2xl overflow-hidden shadow-2xl hover:shadow-4xl hover:border-white/80 transition-all duration-500 group transform-gpu"
      style={{
        boxShadow:
          '0 30px 60px -12px rgba(0, 0, 0, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
      }}
    >
      {/* Banner */}
      <div
        className="relative h-44 flex items-end justify-center overflow-hidden"
        style={{ background: experience.background }}
      >
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm" />

        {/* Company Logo/SVG */}
        <div className="relative z-10 p-6 flex items-center justify-center h-36">
          {experience.logoType === 'svg' && experience.svgContent ? (
            <div
              className="w-32 h-8"
              dangerouslySetInnerHTML={{ __html: experience.svgContent }}
            />
          ) : (
            <div className="relative">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={120}
                height={40}
                className="object-contain filter brightness-0 invert"
              />
            </div>
          )}
        </div>

        {/* Company Logo Image (Background) */}
        <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full overflow-hidden opacity-80">
          <Image
            src={experience.logo}
            alt={experience.company}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-8 bg-transparent backdrop-blur-lg group-hover:bg-white/5 transition-all duration-500 border-t border-white/40">
        <h5 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {experience.role}
        </h5>
        <h6 className="text-sm font-semibold text-gray-600 mb-4 group-hover:text-blue-500 transition-colors duration-300">
          {experience.duration}
        </h6>
        <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-medium">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="page-scroll py-24 px-8">
      <div className="container max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          <span className="relative inline-block">
            <span className="relative z-10 text-white">Experience</span>
            <span className="absolute inset-0 bg-orange-300 rounded-lg transform -skew-y-1 filter blur-sm opacity-80"></span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
