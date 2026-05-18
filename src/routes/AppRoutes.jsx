import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import GalleryPage from '../pages/GalleryPage';
import VideosPage from '../pages/VideosPage';
import TestimonialsPage from '../pages/TestimonialsPage';
import ContactPage from '../pages/ContactPage';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
