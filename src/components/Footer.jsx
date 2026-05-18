import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const footerLinks = {
    services: [
      { name: "Wedding Photography", path: "/gallery" },
      { name: "Pre-Wedding Shoots", path: "/gallery" },
      { name: "Portrait Sessions", path: "/gallery" },
      { name: "Temple Photography", path: "/gallery" },
      { name: "Event Coverage", path: "/gallery" },
      { name: "Video Editing", path: "/videos" },
    ],
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Gallery", path: "/gallery" },
      { name: "Videos", path: "/videos" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Contact", path: "/contact" },
    ],
  };
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mlgzqvkr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (response.ok) {
      setEmail("");
      alert("Subscribed successfully!");
    }
  };
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/its_sridhaa/",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@its_sridhaa",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/people/SriDhaa-Dairies/61583191416929/",
    },
  ];

  return (
    <footer className="bg-luxury-dark border-t border-gold-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              <span className="luxury-text-gradient">Cinematic</span>
              <span className="text-white"> Studio</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Capturing timeless moments with cinematic excellence.
              Award-winning photography and video editing services.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:sridhaavisuals@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors duration-300"
              >
                <HiMail className="text-xl" />
                <span>sridhaavisuals@gmail.com</span>
              </a>
              <a
                href="tel:+918550867209"
                className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors duration-300"
              >
                <HiPhone className="text-xl" />
                <span>+91 85508 67209</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for latest updates and exclusive
              offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 mb-6">
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-luxury-light border border-gold-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors duration-300"
              />

              <button
                type="submit"
                className="px-6 py-2 luxury-gradient text-luxury-darker font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full glass-effect luxury-border text-gray-400 hover:text-gold-500 hover:bg-white/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold-600/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sridhaa Visuals All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Crafted with <FaHeart className="text-red-500" /> by Sridhaa Visuals 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
