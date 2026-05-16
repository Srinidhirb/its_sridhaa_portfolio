import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['all', 'pre-wedding',  'portraits', 'temples'];

  const images = [
    { id: 1, url: '/images/10.png', category: 'pre-wedding', title: 'Couple Photography' },
    { id: 2, url: '/images/2.png', category: 'pre-wedding', title: 'Romantic Pre-Wedding Shoot' },
    { id: 3, url: '/images/3.jpg', category: 'portraits', title: 'Professional Portrait' },
    { id: 4, url: '/images/5.png', category: 'portraits', title: 'Professional Portrait' },
    { id: 5, url: '/images/11.png', category: 'pre-wedding', title: 'Couple Photography' },
    { id: 6, url: '/images/12.png', category: 'pre-wedding', title: 'Bridal Portrait' },
    { id: 7, url: '/images/15.jpg', category: 'temples', title: 'Temple Festival' },
    { id: 8, url: '/images/8.jpg', category: 'portraits', title: 'Beauty Portrait' },
    { id: 9, url: '/images/9.jpg', category: 'pre-wedding', title: 'Bridal Portrait' },
    { id: 10, url: '/images/6.png', category: 'portraits', title: 'Bridal Portrait' },
    { id: 11, url: '/images/4.png', category: 'pre-wedding', title: 'Couple Photography' },
    { id: 12, url: '/images/7.png', category: 'pre-wedding', title: 'Bridal Portrait' },
    { id: 16, url: '/images/16.jpg', category: 'portraits', title: 'Professional Portrait' },
    { id: 13, url: '/images/13.png', category: 'pre-wedding', title: 'Couple Photography' },
    // { id: 14, url: '/images/14.jpg', category: 'pre-wedding', title: 'Couple Photography' },
    { id: 15, url: '/images/1.png', category: 'pre-wedding', title: 'Couple Photography' },
    
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-32 bg-luxury-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visual <span className="luxury-text-gradient">Masterpieces</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our collection of breathtaking photography across weddings, portraits, and special events
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'luxury-gradient text-luxury-darker shadow-lg shadow-gold-500/30'
                  : 'glass-effect luxury-border text-gray-300 hover:text-gold-500'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid mb-6"
              >
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-lg luxury-border luxury-hover-shadow"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker via-luxury-darker/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-white font-semibold text-lg mb-1">{image.title}</p>
                      <p className="text-gold-500 text-sm uppercase tracking-wide">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gold-500 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <HiX />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg luxury-shadow"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-white font-semibold text-xl mb-2">{selectedImage.title}</p>
              <p className="text-gold-500 text-sm uppercase tracking-wide">{selectedImage.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
