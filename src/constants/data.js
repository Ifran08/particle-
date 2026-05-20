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
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

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
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
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
