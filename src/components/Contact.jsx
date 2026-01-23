import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { personalInfo, socialLinks } from '../data/data';
import SpotlightCard from './SpotlightCard';
import SectionHeading from './SectionHeading';
import { fadeInUp, fadeIn } from '../utils/animations';

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
    // Note: This is a mock submission. In production, integrate with a service like Formspree, EmailJS, or your backend.
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className="mb-section"
    >
      <SectionHeading>Contact</SectionHeading>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {/* Contact Info */}
        <motion.div
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <SpotlightCard className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4 mb-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group focus:outline-none focus:ring-2 focus:ring-white/20"
                  aria-label={`${info.label}: ${info.value}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <info.icon className="text-white/70" size={18} aria-hidden="true" />
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
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                  aria-label={`Visit ${social.name} profile`}
                >
                  {social.name === 'LinkedIn' && <FaLinkedin className="text-white/70" size={18} aria-hidden="true" />}
                  {social.name === 'GitHub' && <FaGithub className="text-white/70" size={18} aria-hidden="true" />}
                </a>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <SpotlightCard className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Name"
                  aria-label="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                  aria-label="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20 transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="Subject"
                aria-label="Message subject"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20 transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Message"
                aria-label="Your message"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20 transition-colors resize-none"
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="button-glow w-full py-3 px-6 rounded-lg bg-white text-bg-primary font-semibold hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2"
                aria-label={isSubmitting ? 'Sending message' : 'Send message'}
              >
                {isSubmitting ? (
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-bg-primary border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaPaperPlane aria-hidden="true" />
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
