import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const SocialMedia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });



  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/its_sridhaa/' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@its_sridhaa' },
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/people/SriDhaa-Dairies/61583191416929/' },
    
  ];

  return (
    <section ref={ref} className="py-20 md:py-24 bg-luxury-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Follow Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay <span className="luxury-text-gradient">Connected</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Follow my journey on social media for daily inspiration, behind-the-scenes content, and latest projects
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect luxury-border rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 luxury-hover-shadow min-w-[140px]"
              >
                <div className="text-4xl text-gold-500 mb-3 flex justify-center">
                  {social.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{social.name}</h3>
                
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         
          

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-10"
          >
            <a
              href="https://www.instagram.com/its_sridhaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 glass-effect luxury-border text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <FaInstagram className="text-xl" />
              View More on Instagram
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
