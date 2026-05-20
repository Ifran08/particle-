import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { processSteps } from '@/constants/data';

export default function WorkflowSection() {
  return (
    <section className="relative py-24 md:py-32 bg-bg-primary overflow-hidden">
      <div className="ambient-glow w-[400px] h-[400px] bg-accent top-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Our Process"
          title="How We Work"
          description="A proven methodology that transforms ideas into exceptional digital products."
        />

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content side */}
                  <div className={`flex-1 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <div className="text-accent font-heading font-bold text-sm tracking-widest mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/30 ring-4 ring-bg-primary" />
                  </div>

                  {/* Empty side for layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
