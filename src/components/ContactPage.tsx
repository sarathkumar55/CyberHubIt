import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare, User, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'from-[#FF0033] to-[#E50914]'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@cyberhub.edu', 'admissions@cyberhub.edu'],
      color: 'from-[#E50914] to-[#FF0033]'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Cyber Street', 'Tech City, TC 12345'],
      color: 'from-[#FF0033] to-[#CC0028]'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9AM - 6PM', 'Sat: 10AM - 4PM'],
      color: 'from-[#CC0028] to-[#E50914]'
    },
  ];

  const courses = [
    'Ethical Hacking Mastery',
    'SOC Analyst Professional',
    'Cyber Forensics Expert',
    'Cloud Security Specialist',
    'Penetration Testing Advanced',
    'Security Architecture & Design'
  ];

  const faqs = [
    {
      q: 'What are the prerequisites for enrolling?',
      a: 'Basic computer knowledge and passion for cybersecurity. No prior experience required for beginner courses.'
    },
    {
      q: 'Do you provide placement assistance?',
      a: 'Yes! We have a 98% placement rate with 200+ hiring partners and dedicated placement support.'
    },
    {
      q: 'Are the courses certified?',
      a: 'All our courses come with industry-recognized certifications like CEH, CISSP, and more.'
    },
    {
      q: 'Can I take courses online?',
      a: 'Yes, we offer both online and offline training with live virtual labs and instructor-led sessions.'
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radar circles */}
        <div className="absolute top-1/4 left-1/4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`radar-${i}`}
              className="absolute rounded-full border border-[#FF0033]"
              style={{
                width: '200px',
                height: '200px',
                top: '-100px',
                left: '-100px',
              }}
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.3,
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FF0033] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF0033]/30 bg-[#FF0033]/5 mb-6"
          >
            <MessageSquare className="w-4 h-4 text-[#FF0033]" />
            <span className="text-sm text-[#FF0033]">Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl mb-6"
          >
            Let's Start Your <br />
            <span className="text-[#FF0033]">Cybersecurity Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Have questions? Our expert advisors are here to help you choose the right path
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="mb-4">
                    <div className="relative inline-block">
                      <info.icon className="w-10 h-10 text-[#FF0033]" strokeWidth={1.5} />
                      <div className="absolute inset-0 bg-[#FF0033]/20 blur-xl rounded-full" />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-white/60 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-3xl opacity-50" />
              
              <div className="relative">
                <h2 className="text-3xl mb-2">Send Us a <span className="text-[#FF0033]">Message</span></h2>
                <p className="text-white/60 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm mb-2 text-white/80">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FF0033]" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-[#0A0A0A] border border-[#FF0033]/30 rounded-lg focus:border-[#FF0033] focus:outline-none transition-all duration-300 text-white"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm mb-2 text-white/80">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FF0033]" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-[#0A0A0A] border border-[#FF0033]/30 rounded-lg focus:border-[#FF0033] focus:outline-none transition-all duration-300 text-white"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm mb-2 text-white/80">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FF0033]" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-[#0A0A0A] border border-[#FF0033]/30 rounded-lg focus:border-[#FF0033] focus:outline-none transition-all duration-300 text-white"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  {/* Course */}
                  <div>
                    <label className="block text-sm mb-2 text-white/80">Interested Course</label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#FF0033]/30 rounded-lg focus:border-[#FF0033] focus:outline-none transition-all duration-300 text-white"
                      required
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, i) => (
                        <option key={i} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm mb-2 text-white/80">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#FF0033]/30 rounded-lg focus:border-[#FF0033] focus:outline-none transition-all duration-300 text-white resize-none"
                      placeholder="Tell us about your goals and questions..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255, 0, 51, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl mb-2">Frequently Asked <span className="text-[#FF0033]">Questions</span></h2>
              <p className="text-white/60 mb-8">Quick answers to common questions</p>
            </div>

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <h3 className="text-lg mb-3 text-white/90">{faq.q}</h3>
                    <p className="text-white/60 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[#FF0033]/10 to-transparent border border-[#FF0033]"
            >
              <h3 className="text-2xl mb-3">Still Have Questions?</h3>
              <p className="text-white/60 mb-6">
                Schedule a free consultation with our expert advisors
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white rounded-lg"
              >
                Book Free Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-[#FF0033]/20"
        >
          <div className="aspect-[21/9] bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#FF0033] mx-auto mb-4" />
              <h3 className="text-2xl mb-2">Visit Our Campus</h3>
              <p className="text-white/60">123 Cyber Street, Tech City, TC 12345</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 px-6 py-3 border border-[#FF0033] text-[#FF0033] rounded-lg hover:bg-[#FF0033]/10 transition-all duration-300"
              >
                Get Directions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
