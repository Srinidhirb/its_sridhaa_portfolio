import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Gallery />
    </motion.div>
  );
};

export default GalleryPage;
