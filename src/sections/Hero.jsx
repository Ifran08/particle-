import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { heroTitle, heroSubtitle, heroCTA, heroTrust, staggerContainer } from '@/animations/variants';
import { stats } from '@/constants/data';
import Button from '@/components/Button';
import ParticleCanvas from '@/components/ParticleCanvas';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg-primary">
        {/* Particle effect */}
        <ParticleCanvas />

        {/* Ambient glow orbs */}
        <div className="ambient-glow w-[600px] h-[600px] bg-accent top-1/4 -left-48 animate-pulse-glow" />
        <div className="ambient-glow w-[400px] h-[400px] bg-blue-500 bottom-1/4 -right-32 animate-pulse-glow" style={{ animationDelay: '2s' }} />

        {/* Gradient overlays */}
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute bottom-0 left-0 right-0 h-40 gradient-bottom" />

        {/* Film grain */}
        <div className="absolute inset-0 film-grain pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={heroSubtitle} className="mb-6">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Premium Digital Experiences
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={heroTitle}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-8 max-w-5xl"
          >
            We Build Digital{' '}
            <span className="text-gradient">Experiences</span>{' '}
            That Inspire
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroSubtitle}
            className="text-text-secondary text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10"
          >
            AXIOM is a creative studio specializing in brand identity, web development,
            and digital experiences that transcend expectations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroCTA}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Button to="/projects" size="lg">
              View Our Work
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              <Play className="w-4 h-4" />
              Start a Project
            </Button>
          </motion.div>

          {/* Trust indicators — Stats */}
          <motion.div
            variants={heroTrust}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-text-muted text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
