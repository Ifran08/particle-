import { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/animations/variants';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import { contactInfo, socialLinks } from '@/constants/data';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputClasses = 'w-full bg-white/5 border border-border rounded-xl px-5 py-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all duration-300';

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-bg-primary overflow-hidden">
        <div className="ambient-glow w-[500px] h-[500px] bg-accent top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4">Contact Us</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Let's <span className="text-gradient">Talk</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to start your next project? We'd love to hear from you.
              Get in touch and let's create something amazing together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2">
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-8">Get in Touch</h3>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider">{info.label}</p>
                      <p className="text-text-primary text-sm font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <h4 className="text-text-muted text-xs uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.1} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`${inputClasses} resize-none`}
                />
                <Button type="submit" size="lg">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
