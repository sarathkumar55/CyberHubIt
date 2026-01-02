import { motion } from 'motion/react';
import { Shield, Target, Users, Award, Zap, Globe, TrendingUp, BookOpen, Briefcase, GraduationCap, CheckCircle2, Star } from 'lucide-react';

export function AboutPage() {
  const stats = [
    { value: '6,000+', label: 'Students Trained', icon: Users, color: 'from-[#FF0033] to-[#E50914]' },
    { value: '98%', label: 'Placement Rate', icon: Target, color: 'from-[#E50914] to-[#FF0033]' },
    { value: '200+', label: 'Hiring Partners', icon: Globe, color: 'from-[#FF0033] to-[#CC0028]' },
    { value: '8+', label: 'Years Excellence', icon: Award, color: 'from-[#CC0028] to-[#E50914]' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering individuals with cutting-edge cybersecurity skills to protect digital assets worldwide'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Constantly updating curriculum with latest threats, tools, and industry best practices'
    },
    {
      icon: Users,
      title: 'Student Success',
      description: 'Dedicated to ensuring every student achieves their career goals in cybersecurity'
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'Maintaining highest quality training through certified instructors and real-world labs'
    },
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Foundation',
      description: 'Started with a vision to democratize cybersecurity education',
      icon: BookOpen
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Launched advanced programs and partnership with Fortune 500 companies',
      icon: TrendingUp
    },
    {
      year: '2020',
      title: 'Recognition',
      description: 'Awarded Best Cybersecurity Training Institute by CyberSec Alliance',
      icon: Award
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Introduced AI-powered learning platform and virtual cyber labs',
      icon: Zap
    },
    {
      year: '2025',
      title: 'Global Leader',
      description: 'Serving 6000+ students with 98% placement rate across 50+ countries',
      icon: Globe
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Security Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      credentials: 'PhD in Cybersecurity, 15+ years experience'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Penetration Tester',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      credentials: 'OSCP, CEH, 10+ years in ethical hacking'
    },
    {
      name: 'Aisha Kumar',
      role: 'SOC Operations Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      credentials: 'CISSP, GCIH, Former FBI Cyber Division'
    },
    {
      name: 'James Chen',
      role: 'Forensics Specialist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      credentials: 'CHFI, EnCE, Digital forensics expert'
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Network mesh effect */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <radialGradient id="nodeGlow">
              <stop offset="0%" stopColor="#FF0033" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF0033" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="2"
              fill="url(#nodeGlow)"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>

        {/* Glowing orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF0033]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
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
            <Shield className="w-4 h-4 text-[#FF0033]" />
            <span className="text-sm text-[#FF0033]">About CyberHUB IT Academy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl mb-6"
          >
            Building the <span className="text-[#FF0033]">Future</span> of <br />
            Cybersecurity Education
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            We're on a mission to create the next generation of cybersecurity professionals through hands-on training, industry partnerships, and real-world experience
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="mb-4 flex justify-center">
                    <div className="relative">
                      <stat.icon className="w-10 h-10 text-[#FF0033]" strokeWidth={1.5} />
                      <div className="absolute inset-0 bg-[#FF0033]/20 blur-xl rounded-full" />
                    </div>
                  </div>
                  <div className={`text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Core <span className="text-[#FF0033]">Values</span></h2>
            <p className="text-white/60 text-lg">Principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <value.icon className="w-12 h-12 text-[#FF0033]" strokeWidth={1.5} />
                        <div className="absolute inset-0 bg-[#FF0033]/20 blur-xl rounded-full" />
                      </div>
                    </div>
                    <h3 className="text-xl mb-3">{value.title}</h3>
                    <p className="text-white/60 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our <span className="text-[#FF0033]">Journey</span></h2>
            <p className="text-white/60 text-lg">From startup to industry leader</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF0033] via-[#E50914] to-[#FF0033]" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative">
                        <div className="text-2xl text-[#FF0033] mb-2">{item.year}</div>
                        <h3 className="text-xl mb-2">{item.title}</h3>
                        <p className="text-white/60">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF0033] to-[#E50914] border-4 border-[#0A0A0A]">
                    <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    <div className="absolute inset-0 bg-[#FF0033]/40 rounded-full blur-xl" />
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Meet Our <span className="text-[#FF0033]">Expert Team</span></h2>
            <p className="text-white/60 text-lg">Industry veterans dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="text-xl mb-2">{member.name}</h3>
                    <div className="text-[#FF0033] mb-3">{member.role}</div>
                    <p className="text-sm text-white/60">{member.credentials}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(#FF0033 1px, transparent 1px), linear-gradient(90deg, #FF0033 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative text-center">
            <h2 className="text-4xl mb-6">
              Join the <span className="text-[#FF0033]">CyberHUB Family</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Start your cybersecurity journey with industry experts and cutting-edge training programs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 51, 0.5)' }}
                className="px-8 py-4 bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white rounded-lg text-lg"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-[#FF0033] text-[#FF0033] rounded-lg text-lg hover:bg-[#FF0033]/10 transition-all duration-300"
              >
                Schedule a Tour
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
