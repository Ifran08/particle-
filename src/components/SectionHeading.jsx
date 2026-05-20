import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeUp, staggerContainer } from '@/animations/variants';

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = true,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn('max-w-3xl mb-16 md:mb-20', alignClass)}
    >
      {subtitle && (
        <motion.span
          variants={fadeUp}
          className="inline-block text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          'font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6',
          light ? 'text-text-primary' : 'text-text-primary'
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
