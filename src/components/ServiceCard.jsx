import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        'group relative p-8 rounded-2xl',
        'bg-bg-card border border-border',
        'hover:border-accent/30 hover:bg-white/[0.04]',
        'transition-all duration-500'
      )}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-accent" />
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
