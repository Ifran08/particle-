import { motion } from 'framer-motion';
import { pageTransition } from '@/animations/variants';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import CTABanner from '@/sections/CTABanner';
import { projects } from '@/constants/data';

export default function Projects() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-bg-primary overflow-hidden">
        <div className="ambient-glow w-[500px] h-[500px] bg-accent top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4">Portfolio</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Our <span className="text-gradient">Projects</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of work spanning brand identity, web development,
              mobile applications, and digital experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />
      <CTABanner />
    </motion.div>
  );
}
