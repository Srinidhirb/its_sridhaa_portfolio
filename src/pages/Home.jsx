import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowDown, HiArrowRight, HiCamera } from 'react-icons/hi';

const Home = () => {
  // Featured gallery images
  const featuredGallery = [
    { id: 1, url: '/images/10.png', title: 'Couple Photography' },
    { id: 2, url: '/images/2.png', title: 'Pre-Wedding Shoot' },
    { id: 3, url: '/images/3.jpg', title: 'Portrait' },
    { id: 4, url: '/images/5.png', title: 'Portrait Session' },
    { id: 5, url: '/images/11.png', title: 'Couple Moments' },
    { id: 6, url: '/images/12.png', title: 'Bridal Portrait' },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
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
              className="flex flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <Link
                to="/gallery"
                className="px-4 py-3 md:px-8 md:py-4 luxury-gradient text-luxury-darker text-sm md:text-base font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/40 transition-all duration-300 hover:scale-105"
              >
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 md:px-8 md:py-4 glass-effect text-white text-sm md:text-base font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-gold-500 cursor-pointer hover:text-gold-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <HiArrowDown className="text-3xl" />
        </motion.button>
      </section>

      {/* About Preview Section */}
      <section id="about-section" className="py-20 md:py-32 bg-luxury-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, #d4a545 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative luxury-border rounded-lg overflow-hidden luxury-hover-shadow">
                <img
                  src="/images/mine.png"
                  alt="Its_sridhaa"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker/80 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">
                About Its_sridhaa
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Visual Stories by{" "}
                <span className="luxury-text-gradient">Sridhaa</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate photographer and video editor focused on capturing authentic emotions and creating cinematic visuals that preserve meaningful moments.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                My journey began with a love for storytelling through the lens — from portraits and candid moments to weddings, temple photography, and creative cinematic edits.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3 luxury-gradient text-luxury-darker font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/40 transition-all duration-300 hover:scale-105"
              >
                Learn More About Me
                <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-20 md:py-32 bg-luxury-darker relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <HiCamera className="text-gold-500 text-3xl" />
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase">
                Featured Work
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Gallery <span className="luxury-text-gradient">Highlights</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              A glimpse into my portfolio of stunning photography
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {featuredGallery.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg luxury-border luxury-hover-shadow cursor-pointer aspect-square"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker via-luxury-darker/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 luxury-gradient text-luxury-darker font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/40 transition-all duration-300 hover:scale-105"
            >
              View Full Gallery
              <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-luxury-darker relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create{" "}
              <span className="luxury-text-gradient">Magic Together?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with stunning photography and cinematic video production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/gallery"
                className="px-8 py-4 glass-effect text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                View Gallery
              </Link>
              <Link
                to="/videos"
                className="px-8 py-4 glass-effect text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Watch Reels
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 luxury-gradient text-luxury-darker font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/40 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
