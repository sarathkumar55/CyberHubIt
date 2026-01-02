import { motion } from 'motion/react';
import { Shield, Target, Users, Award, Zap, Globe, Lock, Code, ChevronRight, Star } from 'lucide-react';
import { HeroSection } from './HeroSection';

export function HomePage() {
  const stats = [
    { value: '6K+', label: 'Students Trained', icon: Users },
    { value: '98%', label: 'Placement Rate', icon: Target },
    { value: '200+', label: 'Hiring Partners', icon: Globe },
    { value: '8+', label: 'Years Expertise', icon: Award },
  ];

  const features = [
    {
      icon: Target,
      title: 'Real-World Training',
      description: 'Hands-on experience with live cyber attack simulations and defense scenarios'
    },
    {
      icon: Award,
      title: 'Certified Mentors',
      description: 'Learn from industry experts with real-world cybersecurity experience'
    },
    {
      icon: Users,
      title: '100% Placement Support',
      description: 'Dedicated career guidance and placement assistance with top companies'
    },
    {
      icon: Zap,
      title: 'Live Cyber Labs',
      description: 'Access to state-of-the-art virtual labs for practical skill development'
    },
  ];

  const courses = [
    {
      title: 'Ethical Hacking',
      description: 'Master penetration testing and vulnerability assessment',
      duration: '6 Months',
      level: 'Intermediate',
      icon: Lock,
    },
    {
      title: 'SOC Analyst',
      description: 'Learn security operations center and incident response',
      duration: '5 Months',
      level: 'Beginner',
      icon: Shield,
    },
    {
      title: 'Cyber Forensics',
      description: 'Digital investigation and evidence collection techniques',
      duration: '4 Months',
      level: 'Advanced',
      icon: Target,
    },
    {
      title: 'Cloud Security',
      description: 'Secure cloud infrastructure and applications',
      duration: '4 Months',
      level: 'Intermediate',
      icon: Globe,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'SOC Analyst at TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      text: 'The training was exceptional. I landed my dream job within 2 weeks of completing the course!'
    },
    {
      name: 'Michael Chen',
      role: 'Penetration Tester',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      text: 'Real-world scenarios and expert mentors made all the difference in my career transition.'
    },
    {
      name: 'Priya Sharma',
      role: 'Security Engineer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      text: 'From zero knowledge to landing a cybersecurity role. Best decision of my career!'
    },
  ];

  return (
    <div className="relative">
      {/* New Creative Hero Section */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="relative py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">
              Why Choose <span className="text-[#FF0033]">CyberHUB IT Academy</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Industry-leading cybersecurity training designed for real-world success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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
                  <div className="absolute inset-0 bg-[#FF0033]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <feature.icon className="w-12 h-12 text-[#FF0033]" strokeWidth={1.5} />
                        <div className="absolute inset-0 bg-[#FF0033]/20 blur-xl rounded-full" />
                      </div>
                    </div>
                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">
              Featured <span className="text-[#FF0033]">Courses</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Comprehensive programs designed to transform you into a cybersecurity expert
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-full p-6 rounded-2xl bg-[#1A1A1A] border border-[#FF0033]/10 hover:border-[#FF0033] transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="mb-6">
                      <course.icon className="w-12 h-12 text-[#FF0033]" strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-1 rounded bg-[#FF0033]/10 text-[#FF0033] border border-[#FF0033]/20">
                        {course.level}
                      </span>
                      <span className="text-xs text-white/40">{course.duration}</span>
                    </div>

                    <h3 className="text-xl mb-3">{course.title}</h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">{course.description}</p>

                    <button className="w-full py-2.5 rounded-lg border border-[#FF0033]/30 text-[#FF0033] hover:bg-[#FF0033]/10 transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-[#FF0033]">
                      Join Now
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-[#FF0033] text-[#FF0033] rounded-lg hover:bg-[#FF0033]/10 transition-all duration-300"
            >
              View All Courses
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-block mb-4">
                  <stat.icon className="w-12 h-12 text-[#FF0033] mx-auto" strokeWidth={1.5} />
                  <div className="absolute inset-0 bg-[#FF0033]/20 blur-2xl rounded-full" />
                </div>
                <motion.div
                  className="text-5xl mb-2 text-[#FF0033]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">
              Student <span className="text-[#FF0033]">Success Stories</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Hear from our graduates who transformed their careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-[#1A1A1A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FF0033] text-[#FF0033]" />
                      ))}
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.text}"</p>
                    
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#FF0033]"
                      />
                      <div>
                        <div className="text-white">{testimonial.name}</div>
                        <div className="text-sm text-[#FF0033]">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033] overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(#FF0033 1px, transparent 1px), linear-gradient(90deg, #FF0033 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative text-center">
              <h2 className="text-4xl lg:text-5xl mb-6">
                Ready to Start Your <span className="text-[#FF0033]">Cyber Journey?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with our industry-leading cybersecurity programs
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 0, 51, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white rounded-lg text-lg inline-flex items-center gap-2"
              >
                Enroll Now
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
