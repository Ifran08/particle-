import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/constants/data';

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-bg-secondary overflow-hidden">
      <div className="ambient-glow w-[500px] h-[500px] bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the brands and leaders we've partnered with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
