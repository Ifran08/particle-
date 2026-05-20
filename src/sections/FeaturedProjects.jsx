import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import ScrollReveal from '@/components/ScrollReveal';
import { projects } from '@/constants/data';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProjects() {
  return (
    <section className="relative py-24 md:py-32 bg-bg-secondary overflow-hidden">
      <div className="ambient-glow w-[500px] h-[500px] bg-blue-600 -bottom-32 -left-32" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Our Work"
          title="Featured Projects"
          description="A curated selection of our most impactful work across industries and disciplines."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Button to="/projects" variant="secondary">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
