import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Testimonials />
    </motion.div>
  );
};

export default TestimonialsPage;
