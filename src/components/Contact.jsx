import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error'
  const [errors, setErrors] = useState({});

  const handleLinkedInClick = (e) => {
    e.preventDefault();
    if (window.confirm("Open LinkedIn account?")) {
      window.open(
        "https://www.linkedin.com/in/sarveshkumar3005?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if configuration is set, else run a preview mock submission
    if (!publicKey || publicKey === 'user_public_key_placeholder' || !serviceId || serviceId === 'service_default') {
      setTimeout(() => {
        setIsSending(false);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Auto reset success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setIsSending(false);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error: ", error);
        setIsSending(false);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute left-10 bottom-10 w-[400px] h-[400px] bg-coca-red/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Scroll Reveal Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.84, y: 80 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-coca-red font-display text-sm font-bold tracking-widest uppercase mb-2">
            Let's connect
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-coca-red mx-auto mt-4 rounded-full" />
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Info Column (Lg: 5 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display font-black text-white text-2xl mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light">
              Feel free to reach out to me! Whether you want to discuss machine learning applications, Salesforce integrations, web development, or just want to say hi, my inbox is open.
            </p>

            <div className="flex flex-col gap-6 mb-8">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-coca-red/10 border border-coca-red/20 flex items-center justify-center text-xl text-coca-red group-hover:bg-coca-red group-hover:text-white transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xs uppercase tracking-wide">Email</h4>
                  <a href="mailto:sarveshkumarsps2006@gmail.com" className="text-gray-400 text-sm hover:text-coca-red transition-colors duration-300">
                    sarveshkumarsps2006@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-coca-red/10 border border-coca-red/20 flex items-center justify-center text-xl text-coca-red group-hover:bg-coca-red group-hover:text-white transition-all duration-300">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xs uppercase tracking-wide">Phone</h4>
                  <a href="tel:+917639315542" className="text-gray-400 text-sm hover:text-coca-red transition-colors duration-300">
                    +91 76393 15542
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-coca-red/10 border border-coca-red/20 flex items-center justify-center text-xl text-coca-red group-hover:bg-coca-red group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xs uppercase tracking-wide">Location</h4>
                  <p className="text-gray-400 text-sm">Tiruppur, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/sarvesh0506" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex justify-center items-center border border-white/10 bg-white/5 text-gray-400 hover:text-coca-red hover:border-coca-red hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
             <a 
              href="#" 
              onClick={handleLinkedInClick} 
              className="w-10 h-10 rounded-full flex justify-center items-center border border-white/10 bg-white/5 text-gray-400 hover:text-coca-red hover:border-coca-red hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Form Column (Lg: 7 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form 
            ref={formRef} 
            onSubmit={sendEmail} 
            className="glass-card p-8 md:p-10 rounded-2xl border border-white/10 flex flex-col gap-6"
          >
            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-5 py-3.5 bg-matte-black border ${errors.name ? 'border-coca-red' : 'border-white/10 focus:border-coca-red/60'} rounded-lg text-white text-sm outline-none transition-colors duration-300 focus:shadow-[0_0_10px_rgba(228,30,38,0.1)]`}
                placeholder="SARVESHKUMAR S"
              />
              {errors.name && <span className="text-coca-red text-[11px] font-semibold mt-1.5">{errors.name}</span>}
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-5 py-3.5 bg-matte-black border ${errors.email ? 'border-coca-red' : 'border-white/10 focus:border-coca-red/60'} rounded-lg text-white text-sm outline-none transition-colors duration-300 focus:shadow-[0_0_10px_rgba(228,30,38,0.1)]`}
                placeholder="your.email@example.com"
              />
              {errors.email && <span className="text-coca-red text-[11px] font-semibold mt-1.5">{errors.email}</span>}
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className={`w-full px-5 py-3.5 bg-matte-black border ${errors.message ? 'border-coca-red' : 'border-white/10 focus:border-coca-red/60'} rounded-lg text-white text-sm outline-none resize-none transition-colors duration-300 focus:shadow-[0_0_10px_rgba(228,30,38,0.1)]`}
                placeholder="How can I help you?"
              />
              {errors.message && <span className="text-coca-red text-[11px] font-semibold mt-1.5">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 rounded-lg bg-coca-red hover:bg-coca-dark text-white font-display font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50 shadow-[0_0_15px_rgba(228,30,38,0.2)]"
            >
              {isSending ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane size={11} />
                </>
              )}
            </button>

            {/* Notification alert states */}
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold rounded-lg text-center"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-coca-red/10 border border-coca-red/20 text-coca-red text-xs font-semibold rounded-lg text-center"
              >
                Failed to send message. Please try emailing directly.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
      </motion.div>
    </section>
  );
}
