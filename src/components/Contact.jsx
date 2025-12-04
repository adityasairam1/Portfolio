import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { personalInfo, socialLinks } from '../data/data';
import SpotlightCard from './SpotlightCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    }
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mb-8 gradient-text tracking-tighter"
      >
        Contact
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Contact Info */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SpotlightCard className="p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4 mb-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <info.icon className="text-white/70" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 mb-1">{info.label}</div>
                    <div className="text-white/90">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex gap-3 pt-4 border-t border-white/5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  {social.name === 'LinkedIn' && <FaLinkedin className="text-white/70" size={18} />}
                  {social.name === 'GitHub' && <FaGithub className="text-white/70" size={18} />}
                </a>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          custom={1}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SpotlightCard className="p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors resize-none"
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="button-glow w-full py-3 px-6 rounded-lg bg-white text-[#0a0a0a] font-semibold hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0a0a0a] border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </span>
                )}
              </motion.button>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
