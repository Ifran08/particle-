import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/constants/data';

export default function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-bg-primary overflow-hidden">
      {/* Ambient glow */}
      <div className="ambient-glow w-[400px] h-[400px] bg-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="What We Do"
          title="Services Built for Impact"
          description="We offer a comprehensive suite of digital services designed to elevate your brand and drive meaningful results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
