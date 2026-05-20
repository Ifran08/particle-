import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks, socialLinks } from '@/constants/data';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-primary border-t border-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <ScrollReveal className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">A</span>
              </div>
              <span className="font-heading font-bold text-xl text-text-primary tracking-tight">
                AXIOM
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              We craft premium digital experiences that push the boundaries of design and technology. Every pixel matters.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.1} className="md:col-span-3">
            <h4 className="font-heading font-semibold text-text-primary text-sm uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-accent text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.2} className="md:col-span-4">
            <h4 className="font-heading font-semibold text-text-primary text-sm uppercase tracking-wider mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>hello@axiomstudio.com</li>
              <li>+1 (555) 234-5678</li>
              <li>New York, NY</li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-full transition-all duration-300"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {currentYear} AXIOM Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-text-muted">
            <a href="#" className="hover:text-text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
