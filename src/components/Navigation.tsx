import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'about', label: 'About Us' },
    { id: 'placements', label: 'Placements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-lg shadow-lg shadow-[#FF0033]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
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
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative px-1 py-2 transition-all duration-300 ${
                  currentPage === item.id ? 'text-[#FF0033]' : 'text-white/80 hover:text-[#FF0033]'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF0033] to-transparent"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              onClick={() => setCurrentPage('dashboard')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white rounded hover:shadow-lg hover:shadow-[#FF0033]/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Student Login
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#FF0033]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}