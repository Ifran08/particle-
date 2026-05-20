import { motion } from 'framer-motion';
import { pageTransition } from '@/animations/variants';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/sections/CTABanner';
import WorkflowSection from '@/sections/WorkflowSection';
import { services } from '@/constants/data';
import { CheckCircle } from 'lucide-react';

export default function Services() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-bg-primary overflow-hidden">
        <div className="ambient-glow w-[500px] h-[500px] bg-accent top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4">Our Services</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Comprehensive <span className="text-gradient">Digital Solutions</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              From strategy to execution, we provide end-to-end digital services
              that transform brands and drive growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                subtitle="Why AXIOM"
                title="Expertise That Delivers Results"
                align="left"
              />
              <div className="space-y-4">
                {[
                  'Cross-functional teams with deep industry expertise',
                  'Agile methodology for rapid iteration and delivery',
                  'Transparent communication throughout every project',
                  'Ongoing support and optimization post-launch',
                  'Cutting-edge technologies and best practices',
                  'Data-driven approach to design and strategy',
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <p className="text-text-secondary text-sm">{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal direction="right">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />
      <WorkflowSection />
      <div className="section-divider" />
      <CTABanner />
    </motion.div>
  );
}
