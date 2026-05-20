import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeUp } from '@/animations/variants';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/sections/CTABanner';
import { stats, teamMembers } from '@/constants/data';
import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-bg-primary overflow-hidden">
        <div className="ambient-glow w-[500px] h-[500px] bg-accent top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4">About AXIOM</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              The Studio Behind<br />the <span className="text-gradient">Vision</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Founded in 2012, AXIOM is a collective of designers, engineers, and strategists
              united by a shared passion for creating exceptional digital experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 md:py-32 bg-bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Our Philosophy"
            title="What Drives Us"
            description="We believe great design is invisible — it just works. Our approach combines creativity with strategy."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To bridge the gap between brands and their audiences through purposeful, innovative digital experiences that leave lasting impressions.' },
              { icon: Eye, title: 'Our Vision', desc: 'A world where every digital touchpoint is an opportunity for meaningful connection, crafted with intention and built with excellence.' },
              { icon: Heart, title: 'Our Values', desc: 'Integrity, innovation, and craftsmanship guide every decision we make. We treat every project as a chance to set a new standard.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-bg-card border border-border hover:border-border-hover transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="The Team"
            title="Meet the Minds"
            description="A diverse team of creative professionals dedicated to pushing the boundaries of digital design."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="group rounded-2xl overflow-hidden bg-bg-card border border-border hover:border-border-hover transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-heading font-semibold text-text-primary mb-1">{member.name}</h4>
                    <p className="text-accent text-sm mb-2">{member.role}</p>
                    <p className="text-text-muted text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />
      <CTABanner />
    </motion.div>
  );
}
