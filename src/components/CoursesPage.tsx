import { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Target, Globe, Code, Database, ChevronRight, Clock, Award, Users, CheckCircle2, Zap, Terminal } from 'lucide-react';

export function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Certifications'];

  const courses = [
    {
      title: 'Ethical Hacking Mastery',
      description: 'Comprehensive penetration testing, vulnerability assessment, and exploitation techniques',
      duration: '6 Months',
      level: 'Intermediate',
      students: '2,500+',
      price: '$899',
      icon: Lock,
      features: ['Network Penetration Testing', 'Web Application Security', 'Wireless Security', 'Social Engineering'],
      certification: 'CEH Certified',
    },
    {
      title: 'SOC Analyst Professional',
      description: 'Master security operations center procedures, threat hunting, and incident response',
      duration: '5 Months',
      level: 'Beginner',
      students: '3,200+',
      price: '$799',
      icon: Shield,
      features: ['SIEM Tools', 'Threat Intelligence', 'Incident Response', 'Log Analysis'],
      certification: 'SOC Analyst Certified',
    },
    {
      title: 'Cyber Forensics Expert',
      description: 'Digital investigation, evidence collection, and forensic analysis techniques',
      duration: '4 Months',
      level: 'Advanced',
      students: '1,800+',
      price: '$949',
      icon: Target,
      features: ['Digital Evidence Collection', 'Memory Forensics', 'Mobile Forensics', 'Malware Analysis'],
      certification: 'Forensics Expert',
    },
    {
      title: 'Cloud Security Specialist',
      description: 'Secure cloud infrastructure across AWS, Azure, and GCP platforms',
      duration: '4 Months',
      level: 'Intermediate',
      students: '2,100+',
      price: '$849',
      icon: Globe,
      features: ['AWS Security', 'Azure Security', 'GCP Security', 'Container Security'],
      certification: 'Cloud Security Expert',
    },
    {
      title: 'Penetration Testing Advanced',
      description: 'Advanced exploitation techniques and real-world penetration testing scenarios',
      duration: '5 Months',
      level: 'Advanced',
      students: '1,500+',
      price: '$999',
      icon: Code,
      features: ['Advanced Exploitation', 'Custom Tool Development', 'Red Team Operations', 'Zero-Day Research'],
      certification: 'Advanced Pen Tester',
    },
    {
      title: 'Security Architecture & Design',
      description: 'Design and implement enterprise-level security architectures',
      duration: '6 Months',
      level: 'Advanced',
      students: '1,200+',
      price: '$1,099',
      icon: Database,
      features: ['Security Architecture', 'Threat Modeling', 'Secure SDLC', 'Compliance & Governance'],
      certification: 'Security Architect',
    },
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.level.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#FF0033 1px, transparent 1px), linear-gradient(90deg, #FF0033 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating hexagons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <div 
              className="w-full h-full border border-[#FF0033]"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            />
          </motion.div>
        ))}

        {/* Glowing orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-[#FF0033]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF0033]/30 bg-[#FF0033]/5 mb-6"
          >
            <Shield className="w-4 h-4 text-[#FF0033]" />
            <span className="text-sm text-[#FF0033]">Industry-Leading Programs</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl mb-6"
          >
            Master Cybersecurity <br />
            Skills Built <span className="text-[#FF0033]">for Real-World Defense</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Hands-on training with industry experts, real-world scenarios, and cutting-edge tools
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter.toLowerCase())}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeFilter === filter.toLowerCase()
                  ? 'bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white shadow-lg shadow-[#FF0033]/30'
                  : 'bg-[#1A1A1A] border border-[#FF0033]/20 text-white/70 hover:border-[#FF0033] hover:text-[#FF0033]'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-500 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glowing corner effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF0033]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <course.icon className="w-14 h-14 text-[#FF0033]" strokeWidth={1.5} />
                      <div className="absolute inset-0 bg-[#FF0033]/20 blur-xl rounded-full" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-[#FF0033]/10 text-[#FF0033] border border-[#FF0033]/30">
                        {course.level}
                      </span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#1A1A1A] text-white/60 border border-[#FF0033]/20">
                        {course.certification}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl mb-3">{course.title}</h3>
                  <p className="text-white/60 mb-6 leading-relaxed">{course.description}</p>

                  {/* Course Stats */}
                  <div className="flex items-center gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-white/60">
                      <Clock className="w-4 h-4 text-[#FF0033]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <Users className="w-4 h-4 text-[#FF0033]" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle2 className="w-4 h-4 text-[#FF0033] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#FF0033]/20">
                    <div>
                      <div className="text-xs text-white/40 mb-1">Course Fee</div>
                      <div className="text-3xl text-[#FF0033]">{course.price}</div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 0, 51, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white rounded-lg flex items-center gap-2"
                    >
                      Enroll Now
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 relative p-12 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033] overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(#FF0033 1px, transparent 1px), linear-gradient(90deg, #FF0033 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-6 h-6 text-[#FF0033]" />
                <span className="text-sm text-[#FF0033] tracking-wider">START YOUR JOURNEY</span>
              </div>
              <h2 className="text-4xl mb-4">
                Can't Find the <span className="text-[#FF0033]">Right Course?</span>
              </h2>
              <p className="text-white/60 text-lg">
                Our expert advisors will help you choose the perfect cybersecurity path based on your goals and experience level.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255, 0, 51, 0.5)' }}
                className="px-8 py-4 bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white rounded-lg text-lg flex items-center justify-center gap-2"
              >
                Talk to Course Advisor
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="px-8 py-4 border border-[#FF0033] text-[#FF0033] rounded-lg text-lg hover:bg-[#FF0033]/10 transition-all duration-300"
              >
                Download Course Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
