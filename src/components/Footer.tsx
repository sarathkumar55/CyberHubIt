import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#FF0033]/20">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#FF0033 1px, transparent 1px), linear-gradient(90deg, #FF0033 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* About Institute */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Shield className="w-10 h-10 text-[#FF0033]" strokeWidth={2} />
                <div className="absolute inset-0 bg-[#FF0033]/20 blur-xl rounded-full" />
              </div>
              <div>
                <div className="text-xl tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="text-[#FF0033]">CyberHUB</span>
                  <span className="text-white"> IT Academy</span>
                </div>
                <div className="text-[10px] text-[#FF0033] tracking-widest" style={{ fontFamily: 'var(--font-accent)' }}>ELITE TRAINING</div>
              </div>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Empowering the next generation of cybersecurity professionals with cutting-edge training, real-world experience, and industry-recognized certifications.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#FF0033]/20 flex items-center justify-center text-white/60 hover:text-[#FF0033] hover:border-[#FF0033] transition-all duration-300"
                  whileHover={{ y: -3, boxShadow: '0 0 20px rgba(255, 0, 51, 0.3)' }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FF0033] mb-6 tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Placements', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => setCurrentPage(link.toLowerCase().replace(' ', ''))}
                    className="text-white/60 hover:text-[#FF0033] transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-[#FF0033] mb-6 tracking-wider">Courses</h3>
            <ul className="space-y-3">
              {['Ethical Hacking', 'SOC Analyst', 'Cyber Forensics', 'Cloud Security', 'Penetration Testing'].map((course) => (
                <li key={course}>
                  <button
                    onClick={() => setCurrentPage('courses')}
                    className="text-white/60 hover:text-[#FF0033] transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#FF0033] mb-6 tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-[#FF0033] mt-1 flex-shrink-0" />
                <span>123 Cyber Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-[#FF0033] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-[#FF0033] flex-shrink-0" />
                <span>info@cyberhub.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#FF0033]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 CyberHUB IT Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-[#FF0033] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF0033] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FF0033] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}