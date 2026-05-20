import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ quote, author, role, company, image, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative p-8 md:p-10 rounded-2xl bg-bg-card border border-border hover:border-border-hover transition-all duration-500"
    >
      {/* Quote icon */}
      <Quote className="w-10 h-10 text-accent/30 mb-6" />

      {/* Quote text */}
      <p className="text-text-primary text-lg md:text-xl leading-relaxed mb-8 font-light italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20"
          loading="lazy"
        />
        <div>
          <p className="text-text-primary font-semibold text-sm">{author}</p>
          <p className="text-text-muted text-sm">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
