import {
  Palette,
  Code,
  Globe,
  Smartphone,
  BarChart3,
  Film,
  Sparkles,
  Layers,
  Zap,
  Target,
  Users,
  Award,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import React from "react";

// Brand icons removed from lucide-react — replaced with inline SVGs
export const GithubIcon = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "1em", height: "1em", ...props },
    React.createElement("path", { d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" })
  );

export const TwitterIcon = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "1em", height: "1em", ...props },
    React.createElement("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
  );

export const LinkedinIcon = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "1em", height: "1em", ...props },
    React.createElement("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
  );

export const InstagramIcon = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "1em", height: "1em", ...props },
    React.createElement("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" })
  );

/**
 * AXIOM — Site Content Data
 * Centralized data for all sections and pages.
 */

// Navigation links
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

// Social links
export const socialLinks = [
  { name: 'Twitter', icon: TwitterIcon, href: '#' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
  { name: 'GitHub', icon: GithubIcon, href: '#' },
];

// Stats / Trust indicators
export const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Global Clients' },
  { value: '12+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

// Services
export const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description:
      'We craft distinctive visual identities that resonate with your audience and stand the test of time through thoughtful design.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Custom-built websites and web applications engineered for performance, scalability, and exceptional user experiences.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Native and cross-platform mobile experiences designed to engage users and drive meaningful interactions on every device.',
  },
  {
    icon: Film,
    title: 'Motion Design',
    description:
      'Cinematic animations and motion graphics that bring your brand to life with fluid, captivating visual storytelling.',
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description:
      'Data-driven digital strategies that position your brand for growth across all channels and touchpoints.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & SEO',
    description:
      'Performance optimization and search visibility strategies that drive organic growth and measurable results.',
  },
];

// Projects
export const projects = [
  {
    title: 'Nebula Dashboard',
    category: 'Web Application',
    description:
      'A comprehensive analytics dashboard with real-time data visualization and AI-powered insights for enterprise clients.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    title: 'Lumina Brand',
    category: 'Brand Identity',
    description:
      'Complete brand redesign for a luxury lifestyle company, including visual identity, guidelines, and digital presence.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    title: 'Vortex Mobile',
    category: 'Mobile App',
    description:
      'A sleek fitness tracking application with social features, gamification, and personalized workout recommendations.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  },
  {
    title: 'Prism Commerce',
    category: 'E-Commerce',
    description:
      'A modern headless commerce platform with AR product visualization and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    title: 'Echosphere',
    category: 'Motion Design',
    description:
      'Award-winning brand film and motion identity system for a leading audio technology company.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop',
  },
  {
    title: 'Meridian Platform',
    category: 'Web Application',
    description:
      'Enterprise SaaS platform with collaborative tools, real-time editing, and advanced project management capabilities.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
  },
];

// Process / Workflow steps
export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We immerse ourselves in your world — understanding your vision, audience, and goals to build a strategic foundation.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We map out the blueprint — defining the approach, architecture, and creative direction that will bring your vision to life.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Crafting pixel-perfect designs that blend aesthetics with functionality, creating intuitive and memorable experiences.',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'Engineering robust, scalable solutions using cutting-edge technologies to ensure performance and future-readiness.',
  },
  {
    number: '05',
    title: 'Launch & Optimize',
    description:
      'Seamless deployment followed by continuous optimization to ensure your product thrives in the real world.',
  },
];

// Testimonials
export const testimonials = [
  {
    quote:
      'AXIOM transformed our entire digital presence. Their attention to detail and creative vision exceeded every expectation we had.',
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'Lumina Corp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'Working with AXIOM was an extraordinary experience. They don\'t just build products — they craft experiences that resonate deeply.',
    author: 'Marcus Rivera',
    role: 'Founder',
    company: 'Vortex Labs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'The level of craftsmanship AXIOM brings to every project is unmatched. Our conversion rates increased 300% after the redesign.',
    author: 'Elena Volkov',
    role: 'CMO',
    company: 'Prism Digital',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
];

// Team members
export const teamMembers = [
  {
    name: 'Alex Mercer',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    bio: 'A visionary designer with 15+ years of experience crafting award-winning digital experiences for global brands.',
  },
  {
    name: 'Sophia Nakamura',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
    bio: 'Full-stack engineer passionate about building performant, accessible, and beautifully engineered web applications.',
  },
  {
    name: 'James Okoye',
    role: 'Strategy Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
    bio: 'Strategic thinker who bridges creativity and business goals, helping brands find their authentic digital voice.',
  },
  {
    name: 'Lily Zhang',
    role: 'Motion Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
    bio: 'Award-winning motion artist who brings brands to life through cinematic animation and immersive visual narratives.',
  },
];

// Contact info
export const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@axiomstudio.com', href: 'mailto:hello@axiomstudio.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 234-5678', href: 'tel:+15552345678' },
  { icon: MapPin, label: 'Location', value: 'New York, NY', href: '#' },
];
