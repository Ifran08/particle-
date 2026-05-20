import { motion } from 'framer-motion';
import { pageTransition } from '@/animations/variants';
import Hero from '@/sections/Hero';
import AboutSection from '@/sections/AboutSection';
import ServicesSection from '@/sections/ServicesSection';
import FeaturedProjects from '@/sections/FeaturedProjects';
import WorkflowSection from '@/sections/WorkflowSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import CTABanner from '@/sections/CTABanner';

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <FeaturedProjects />
      <div className="section-divider" />
      <WorkflowSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <CTABanner />
    </motion.div>
  );
}
