import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  category,
  description,
  imageUrl,
  technologies,
  index = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group relative h-64 md:h-96 lg:h-[500px] rounded-lg md:rounded-2xl overflow-hidden cursor-pointer scroll-reveal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay Gradient */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: isHovered ? 0.7 : 0.4 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8 lg:p-12">
        {/* Top Section - Category & Year */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <span className="text-xs md:text-sm font-black uppercase tracking-widest text-emerald-400 bg-emerald-900/40 px-2 md:px-4 py-1 md:py-2 rounded-full backdrop-blur-sm">
              {category}
            </span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/70">
              {year}
            </span>
          </div>
        </motion.div>

        {/* Bottom Section - Title, Description & Tech */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2 md:space-y-4"
        >
          {/* Title */}
          <div>
            <h3 className="text-xl md:text-3xl lg:text-5xl serif font-bold text-white mb-1 md:mb-3 leading-tight">
              {title}
            </h3>
            <p className="text-xs md:text-base text-white/80 leading-relaxed max-w-2xl hidden md:block">
              {description}
            </p>
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-1 md:gap-2 pt-2 md:pt-4"
          >
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold uppercase tracking-widest text-emerald-300 bg-emerald-900/30 px-2 md:px-3 py-0.5 md:py-1 rounded-full backdrop-blur-sm border border-emerald-500/30"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-xs md:text-sm pt-2 md:pt-4"
          >
            View Project
            <ArrowRight size={14} className="md:w-4 md:h-4 group-hover:translate-x-2 transition-transform" />
          </motion.div>
        </motion.div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 border-2 border-emerald-500/50 rounded-lg md:rounded-2xl pointer-events-none"
      />
    </motion.div>
  );
};

export default ProjectCard;
