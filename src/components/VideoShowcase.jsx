import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { HiPlay, HiX } from "react-icons/hi";

const VideoShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Instagram Reel - Eshanaya ",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.instagram.com/reel/DU8HHbMD6em/embed",
    
      category: "Colaboration",
    },
    {
      id: 2,
      title: "Instagram Reel - Bharathanatyam",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.instagram.com/reel/DX1YjKgNH9h/embed",
      
      category: "Cinematiography",
    },
    {
      id: 3,
      title: "Instagram Reel - 1947",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.instagram.com/reel/DVQ_5inklC1/embed",
     
      category: "Colaboration",
    },
    {
      id: 4,
      title: "Instagram Reel - Cinematic Video",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.instagram.com/reel/DRtDJJvDx9D/embed",
      
      category: "Cinematiography",
    },
    {
      id: 5,
      title: "Instagram Reel -  Highlights",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.instagram.com/reel/DXHLbAzAm0G/embed",
      
      category: "Event",
    },
    {
      id: 6,
      title: "Instagram Reel - Unboxing",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.instagram.com/reel/DYGuWJrP2mb/embed",
      
      category: "Colaboration",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section
      id="videos"
      ref={ref}
      className="py-20 md:py-32 bg-luxury-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #d4a545 25%, transparent 25%), linear-gradient(-45deg, #d4a545 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d4a545 75%), linear-gradient(-45deg, transparent 75%, #d4a545 75%)",
            backgroundSize: "50px 50px",
            backgroundPosition: "0 0, 0 25px, 25px -25px, -25px 0px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">
            Video Showcase
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cinematic <span className="luxury-text-gradient">Productions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience storytelling through motion. Watch our curated collection
            of cinematic films and video edits
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative overflow-hidden rounded-lg luxury-border luxury-hover-shadow">
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker via-luxury-darker/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: hoveredVideo === video.id ? 1.2 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-full luxury-gradient flex items-center justify-center shadow-lg shadow-gold-500/50"
                    >
                      <HiPlay className="text-luxury-darker text-2xl ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 glass-effect rounded-full text-sm text-white font-medium">
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 bg-luxury-light">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">
                        {video.title}
                      </h3>
                      <p className="text-gold-600 text-sm uppercase tracking-wide">
                        {video.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gold-500 transition-colors duration-300 z-10"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close modal"
            >
              <HiX className="text-4xl md:text-5xl" />
            </button>

            <div
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-w-sm mx-auto aspect-[9/16] rounded-lg overflow-hidden luxury-border luxury-shadow">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gold-500">{selectedVideo.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoShowcase;
