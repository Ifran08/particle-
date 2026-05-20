import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function ProjectCard({ title, category, description, image, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-bg-card border border-border hover:border-border-hover transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="glass px-3 py-1.5 rounded-full text-xs font-medium text-white/80">
            {category}
          </span>
        </div>

        {/* Arrow icon on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
