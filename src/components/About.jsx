import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HiCamera, HiFilm, HiBriefcase , HiUsers } from "react-icons/hi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <HiBriefcase />, number: "3+", label: "Projects Completed" },
    { icon: <HiFilm />, number: "10+", label: "Videos Edited" },
    { icon: <HiCamera />, number: "100+", label: "Photos Captured" },
    { icon: <HiUsers />, number: "3+", label: "Happy Clients" },
  ];

  const skills = [
  "Portrait Photography",
  "Wedding Photography",
  "Candid Photography",
  "Temple Photography",
  "Photo Editing",
  "Video Editing",
  "Cinematic Reels",
  "Storytelling",
];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-luxury-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d4a545 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative luxury-border rounded-lg overflow-hidden luxury-hover-shadow">
              <img
                src="/images/mine.png"
                alt="Photographer"
                className="w-full h-[500px] object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker/80 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-600/50" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-600/50" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visual Stories by{" "}
              <span className="luxury-text-gradient"> Sridhaa</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I’m a passionate photographer and video editor focused on
              capturing authentic emotions and creating cinematic visuals that
              preserve meaningful moments.
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              My journey began with a love for storytelling through the lens —
              from portraits and candid moments to weddings, temple photography,
              and creative cinematic edits. With every project, I aim to improve
              my craft, explore new perspectives, and create visuals that feel
              natural, emotional, and timeless.
            </p>

            

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gold-500">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="px-4 py-2 glass-effect luxury-border rounded-full text-sm text-gray-300 hover:text-gold-500 transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block px-8 py-3 luxury-gradient text-luxury-darker font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/40 transition-all duration-300 hover:scale-105"
            >
              Let's Work Together
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center glass-effect luxury-border rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl text-gold-500 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold luxury-text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
