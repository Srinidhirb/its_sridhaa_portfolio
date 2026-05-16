import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-darker/80 via-luxury-darker/60 to-luxury-darker z-10" />
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071"
          alt="Cinematic Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gold-500 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light"
          >
            Capturing Timeless Moments
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-shadow"
          >
            <span className="luxury-text-gradient">Cinematic</span>
            <br />
            <span className="text-white">Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Creative photographer and video editor passionate about capturing authentic moments through cinematic storytelling and visual creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#gallery"
              className="px-8 py-4 luxury-gradient text-luxury-darker font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/40 transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-effect text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-gold-500"
      >
        <HiArrowDown className="text-3xl" />
      </motion.a>
    </section>
  );
};

export default Hero;
