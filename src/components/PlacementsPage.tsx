import { motion } from 'motion/react';
import { Award, TrendingUp, Users, Building, Star, CheckCircle2, Briefcase, DollarSign, MapPin, Calendar } from 'lucide-react';

export function PlacementsPage() {
  const placementStats = [
    { value: '98%', label: 'Placement Rate', icon: TrendingUp },
    { value: '$85K', label: 'Average Package', icon: DollarSign },
    { value: '200+', label: 'Hiring Partners', icon: Building },
    { value: '6000+', label: 'Careers Launched', icon: Users },
  ];

  const topRecruiters = [
    { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200', positions: '45+' },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200', positions: '38+' },
    { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200', positions: '52+' },
    { name: 'IBM', logo: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=200', positions: '41+' },
    { name: 'Cisco', logo: 'https://images.unsplash.com/photo-1560732488-6b0df240254a?w=200', positions: '35+' },
    { name: 'Palo Alto', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200', positions: '28+' },
    { name: 'CrowdStrike', logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200', positions: '31+' },
    { name: 'Fortinet', logo: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=200', positions: '25+' },
  ];

  const successStories = [
    {
      name: 'Sarah Johnson',
      role: 'Senior SOC Analyst',
      company: 'Google',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      package: '$95,000',
      story: 'From complete beginner to landing my dream role at Google in just 6 months. The hands-on labs and expert mentorship made all the difference!',
      course: 'SOC Analyst Professional'
    },
    {
      name: 'Michael Chen',
      role: 'Penetration Tester',
      company: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      package: '$102,000',
      story: 'The ethical hacking program gave me real-world skills. Within 2 weeks of graduation, I had 3 job offers!',
      course: 'Ethical Hacking Mastery'
    },
    {
      name: 'Priya Sharma',
      role: 'Security Engineer',
      company: 'Amazon',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      package: '$98,000',
      story: 'Career transition made easy! The placement team supported me every step of the way until I landed at Amazon.',
      course: 'Cloud Security Specialist'
    },
    {
      name: 'James Rodriguez',
      role: 'Cyber Forensics Analyst',
      company: 'IBM',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      package: '$88,000',
      story: 'The forensics training was incredibly detailed. Got placed at IBM and working on high-profile cases now!',
      course: 'Cyber Forensics Expert'
    },
  ];

  const placementProcess = [
    {
      step: '01',
      title: 'Skill Development',
      description: 'Complete intensive training with hands-on labs and real-world projects'
    },
    {
      step: '02',
      title: 'Resume Building',
      description: 'Expert guidance to create ATS-optimized resume highlighting your skills'
    },
    {
      step: '03',
      title: 'Interview Prep',
      description: 'Mock interviews, technical rounds practice, and behavioral training'
    },
    {
      step: '04',
      title: 'Job Matching',
      description: 'Connect with 200+ hiring partners based on your skills and preferences'
    },
    {
      step: '05',
      title: 'Offer Negotiation',
      description: 'Support in negotiating the best package and career growth opportunities'
    },
  ];

  const achievements = [
    'Highest Placement Rate in Cybersecurity Training',
    'Average Salary Hike of 150%',
    'Partnerships with Fortune 500 Companies',
    'Dedicated Placement Cell with 24/7 Support',
    'Lifetime Career Support & Alumni Network',
    '100% Interview Guarantee',
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Data stream effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-[#FF0033] to-transparent"
            style={{
              left: `${5 + i * 6.5}%`,
              bottom: '-10%',
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}

        {/* Floating hexagons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 70}px`,
              height: `${50 + Math.random() * 70}px`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
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

        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF0033]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
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
            <Award className="w-4 h-4 text-[#FF0033]" />
            <span className="text-sm text-[#FF0033]">Industry-Leading Placements</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl mb-6"
          >
            Launch Your <span className="text-[#FF0033]">Cybersecurity Career</span>
            <br />with Confidence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            98% placement rate with top tech companies. Join thousands of successful graduates building rewarding careers in cybersecurity
          </motion.p>
        </motion.div>

        {/* Placement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {placementStats.map((stat, index) => (
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
                  <div className="text-4xl mb-2 text-[#FF0033]">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Top Recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our <span className="text-[#FF0033]">Top Recruiters</span></h2>
            <p className="text-white/60 text-lg">Partnered with industry leaders worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topRecruiters.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-white/5">
                      <img src={company.logo} alt={company.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-center">
                      <div className="text-lg mb-1">{company.name}</div>
                      <div className="text-sm text-[#FF0033]">{company.positions} Placements</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Student <span className="text-[#FF0033]">Success Stories</span></h2>
            <p className="text-white/60 text-lg">Real careers, real transformations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#FF0033]"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl mb-1">{story.name}</h3>
                        <div className="text-[#FF0033] mb-1">{story.role}</div>
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span>{story.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{story.package}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FF0033] text-[#FF0033]" />
                        ))}
                      </div>
                    </div>

                    {/* Story */}
                    <p className="text-white/70 mb-4 leading-relaxed italic">"{story.story}"</p>

                    {/* Course badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
                      <Briefcase className="w-3 h-3 text-[#FF0033]" />
                      <span className="text-xs text-[#FF0033]">{story.course}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Placement Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our <span className="text-[#FF0033]">Placement Process</span></h2>
            <p className="text-white/60 text-lg">Step-by-step journey to your dream job</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {placementProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="text-4xl text-[#FF0033] mb-4 opacity-50" style={{ fontFamily: 'var(--font-heading)' }}>
                      {process.step}
                    </div>
                    <h3 className="text-lg mb-3">{process.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{process.description}</p>
                  </div>
                </div>
                
                {/* Arrow connector */}
                {index < placementProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#FF0033] z-10">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-4xl mb-6">
                  Why Our <span className="text-[#FF0033]">Placements Stand Out</span>
                </h2>
                <p className="text-white/60 text-lg">
                  Comprehensive support system designed to ensure your career success
                </p>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF0033] flex-shrink-0" />
                    <span className="text-white/80">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
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
              Ready to Start Your <span className="text-[#FF0033]">Success Story?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join our next batch and get guaranteed placement support with top cybersecurity companies
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 51, 0.5)' }}
              className="px-10 py-4 bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white rounded-lg text-lg"
            >
              Apply for Placement Program
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
