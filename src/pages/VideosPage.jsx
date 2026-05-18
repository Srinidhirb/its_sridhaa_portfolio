import { motion } from 'framer-motion';
import VideoShowcase from '../components/VideoShowcase';

const VideosPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <VideoShowcase />
    </motion.div>
  );
};

export default VideosPage;
