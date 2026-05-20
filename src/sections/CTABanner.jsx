import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import Button from '@/components/Button';

export default function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 bg-bg-primary overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="ambient-glow w-[600px] h-[600px] bg-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="inline-block text-accent font-medium text-sm tracking-[0.2em] uppercase mb-6">
            Ready to Start?
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Let's Create Something{' '}
            <span className="text-gradient">Extraordinary</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can bring your vision to life.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" size="lg">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button to="/projects" variant="secondary" size="lg">
              View Our Work
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
