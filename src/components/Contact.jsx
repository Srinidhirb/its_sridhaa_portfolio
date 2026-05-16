import { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, useInView } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [state, formspreeSubmit] = useForm("meenydwe");
  const handleSubmit = async (e) => {
  e.preventDefault();

  await formspreeSubmit(e);

  setTimeout(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  }, 500);
};
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <HiMail />,
      title: "Email",
      info: "sridhaavisuals@gmail.com",
      link: "mailto:sridhaavisuals@gmail.com",
    },
    {
      icon: <HiPhone />,
      title: "Phone",
      info: "+91 8550867209",
      link: "tel:+918550867209",
    },
    {
      icon: <HiLocationMarker />,
      title: "Location",
      info: "Bangalore, Karnataka, India",
      link: "#",
    },
  ];

  const services = [
    "Wedding Photography",
    "Pre-Wedding Shoot",
    "Portrait Session",
    "Temple Photography",
    "Event Coverage",
    "Video Editing",
    "Cinematic Films",
    "Other",
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 bg-luxury-darker relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create{" "}
            <span className="luxury-text-gradient">Magic Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to capture your special moments? Get in touch and let's
            discuss your vision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 glass-effect luxury-border rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-3xl text-gold-500 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-effect luxury-border rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-luxury-light border border-gold-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                  
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-luxury-light border border-gold-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-light border border-gold-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors duration-300"
                      placeholder="+91 98765 43210"
                    />
                    
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-luxury-light border border-gold-600/30 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-light border border-gold-600/30 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors duration-300"
                    />
                    
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="2"
                    className="w-full px-4 py-3 bg-luxury-light border border-gold-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 luxury-gradient text-luxury-darker font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/40 transition-all duration-300 hover:scale-105"
                >
                  {state.submitting ? "Sending..." : "Book Now"}
                </button>
              </div>

              {state.succeeded && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-gold-500 font-medium"
                >
                  Thank you! Your message has been sent successfully.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
