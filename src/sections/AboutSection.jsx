import { motion } from 'framer-motion';
import { Sparkles, Award, Users } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 bg-bg-secondary overflow-hidden">
      {/* Ambient glow */}
      <div className="ambient-glow w-[500px] h-[500px] bg-accent -top-32 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Image / Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 md:right-8 glass-strong rounded-2xl p-6 max-w-[200px]"
              >
                <div className="text-3xl font-heading font-bold text-accent mb-1">12+</div>
                <div className="text-text-secondary text-sm">Years crafting digital excellence</div>
              </motion.div>
              {/* Decorative border */}
              <div className="absolute -inset-4 border border-accent/10 rounded-3xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <div>
            <SectionHeading
              subtitle="About Us"
              title="Crafting Digital Excellence Since 2012"
              description="We're a team of passionate designers, developers, and strategists who believe in the power of exceptional digital experiences."
              align="left"
            />

            <div className="space-y-6 mb-10">
              {[
                { icon: Sparkles, title: 'Innovation First', desc: 'We push creative boundaries to deliver solutions that stand apart from the ordinary.' },
                { icon: Award, title: 'Award-Winning Work', desc: 'Recognized globally for design excellence and technical innovation across industries.' },
                { icon: Users, title: 'Client-Centric', desc: 'Your vision drives everything we do. We build partnerships, not just projects.' },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <Button to="/about">
                Learn More About Us
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
