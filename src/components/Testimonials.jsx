import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiStar } from 'react-icons/hi';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      id: 1,
      name: 'Priya & Rahul',
      role: 'Wedding Couple',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974',
      text: 'Our wedding video was absolutely breathtaking! Every moment was captured with such artistry and emotion. We relive our special day every time we watch it. Truly cinematic excellence!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Anjali Sharma',
      role: 'Pre-Wedding Shoot',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974',
      text: 'The pre-wedding shoot exceeded all expectations! The photographer made us feel so comfortable and captured our love story perfectly. The photos are magazine-worthy!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Vikram Industries',
      role: 'Corporate Client',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974',
      text: 'Professional, creative, and punctual. The corporate event coverage was exceptional with stunning shots that perfectly represented our brand. Highly recommended!',
      rating: 5,
    },

  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-32 bg-luxury-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="luxury-text-gradient">Experiences</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their unforgettable experiences
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect luxury-border rounded-lg p-8 hover:bg-white/10 transition-all duration-300 luxury-hover-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="text-gold-500 text-xl" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover luxury-border"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gold-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-6 text-6xl text-gold-600/10 font-serif leading-none">
                "
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">Ready to create your own story?</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 luxury-gradient text-luxury-darker font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/40 transition-all duration-300 hover:scale-105"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
