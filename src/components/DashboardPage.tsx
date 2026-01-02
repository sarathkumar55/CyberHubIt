import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, TrendingUp, Clock, Target, CheckCircle2, Lock, Shield, Terminal, Code, PlayCircle, FileText, Calendar, Users, BarChart3 } from 'lucide-react';

export function DashboardPage() {
  const studentStats = [
    { label: 'Course Progress', value: '67%', icon: TrendingUp, color: 'from-[#FF0033] to-[#E50914]' },
    { label: 'Labs Completed', value: '24/35', icon: Target, color: 'from-[#E50914] to-[#FF0033]' },
    { label: 'Certifications', value: '3', icon: Award, color: 'from-[#FF0033] to-[#CC0028]' },
    { label: 'Study Hours', value: '142h', icon: Clock, color: 'from-[#CC0028] to-[#E50914]' },
  ];

  const currentCourses = [
    {
      title: 'Ethical Hacking Mastery',
      progress: 67,
      nextLesson: 'Advanced SQL Injection',
      dueDate: 'Jan 15, 2025',
      icon: Lock,
      modules: { completed: 8, total: 12 }
    },
    {
      title: 'Network Security',
      progress: 45,
      nextLesson: 'Firewall Configuration',
      dueDate: 'Jan 20, 2025',
      icon: Shield,
      modules: { completed: 5, total: 10 }
    },
    {
      title: 'Web Application Security',
      progress: 82,
      nextLesson: 'XSS Prevention',
      dueDate: 'Jan 12, 2025',
      icon: Code,
      modules: { completed: 9, total: 11 }
    },
  ];

  const recentActivities = [
    { type: 'completed', title: 'Completed Lab: Network Scanning', time: '2 hours ago', icon: CheckCircle2 },
    { type: 'started', title: 'Started Module: Web Vulnerabilities', time: '5 hours ago', icon: PlayCircle },
    { type: 'achievement', title: 'Earned Certificate: SQL Injection', time: '1 day ago', icon: Award },
    { type: 'submitted', title: 'Submitted Assignment: Penetration Test Report', time: '2 days ago', icon: FileText },
  ];

  const upcomingEvents = [
    { title: 'Live Webinar: Advanced Exploitation', date: 'Jan 10, 2025', time: '2:00 PM', instructor: 'Dr. Sarah Mitchell' },
    { title: 'Hands-on Lab: CTF Challenge', date: 'Jan 12, 2025', time: '3:00 PM', instructor: 'Michael Rodriguez' },
    { title: 'Mock Interview Session', date: 'Jan 15, 2025', time: '10:00 AM', instructor: 'Placement Team' },
  ];

  const skillProgress = [
    { skill: 'Network Security', level: 85, color: '#FF0033' },
    { skill: 'Web Application Security', level: 72, color: '#E50914' },
    { skill: 'Cryptography', level: 65, color: '#FF0033' },
    { skill: 'Malware Analysis', level: 58, color: '#E50914' },
    { skill: 'Social Engineering', level: 90, color: '#FF0033' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Johnson', points: 2450, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
    { rank: 2, name: 'You', points: 2180, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', highlight: true },
    { rank: 3, name: 'Emma Davis', points: 2050, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
    { rank: 4, name: 'James Wilson', points: 1920, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { rank: 5, name: 'Sophia Brown', points: 1805, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Network effect */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="2"
              fill="#FF0033"
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>

        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF0033]/10 rounded-full blur-3xl"
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
          className="mb-12"
        >
          <div>
            <h1 className="text-4xl mb-2">
              Welcome Back, <span className="text-[#FF0033]">Student</span>
            </h1>
            <p className="text-white/60">Continue your cybersecurity journey</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {studentStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/60 mb-2">{stat.label}</div>
                    <div className={`text-3xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="relative">
                    <stat.icon className="w-10 h-10 text-[#FF0033]" strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-[#FF0033]/20 blur-xl rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Current Courses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl">Active <span className="text-[#FF0033]">Courses</span></h2>
              <button className="text-sm text-[#FF0033] hover:underline">View All</button>
            </div>

            {currentCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <course.icon className="w-12 h-12 text-[#FF0033]" strokeWidth={1.5} />
                          <div className="absolute inset-0 bg-[#FF0033]/20 blur-xl rounded-full" />
                        </div>
                        <div>
                          <h3 className="text-xl mb-1">{course.title}</h3>
                          <p className="text-sm text-white/60">
                            Next: {course.nextLesson}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl text-[#FF0033] mb-1">{course.progress}%</div>
                        <div className="text-xs text-white/60">Complete</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="h-2 bg-[#0A0A0A] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#FF0033] to-[#E50914]"
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-white/60">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.modules.completed}/{course.modules.total} Modules</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Due: {course.dueDate}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white rounded-lg text-sm"
                      >
                        Continue
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20"
            >
              <h3 className="text-xl mb-6">Recent <span className="text-[#FF0033]">Activity</span></h3>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 pb-4 border-b border-[#FF0033]/10 last:border-0 last:pb-0"
                  >
                    <div className="relative mt-1">
                      <activity.icon className="w-5 h-5 text-[#FF0033]" />
                      <div className="absolute inset-0 bg-[#FF0033]/20 blur-lg rounded-full" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/90 mb-1">{activity.title}</p>
                      <p className="text-xs text-white/40">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20"
            >
              <h3 className="text-xl mb-6">Upcoming <span className="text-[#FF0033]">Events</span></h3>
              
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-4 rounded-lg bg-[#0A0A0A] border border-[#FF0033]/20 hover:border-[#FF0033] transition-all duration-300"
                  >
                    <h4 className="text-sm mb-2">{event.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-white/60">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-[#FF0033]">{event.instructor}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skill Progress */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20"
          >
            <h3 className="text-2xl mb-6">Skill <span className="text-[#FF0033]">Progress</span></h3>
            
            <div className="space-y-6">
              {skillProgress.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/80">{skill.skill}</span>
                    <span className="text-sm text-[#FF0033]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#0A0A0A] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FF0033]/20"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl">Class <span className="text-[#FF0033]">Leaderboard</span></h3>
              <BarChart3 className="w-6 h-6 text-[#FF0033]" />
            </div>
            
            <div className="space-y-3">
              {leaderboard.map((student, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    student.highlight
                      ? 'bg-gradient-to-r from-[#FF0033]/20 to-transparent border border-[#FF0033]'
                      : 'bg-[#0A0A0A] border border-[#FF0033]/10 hover:border-[#FF0033]/30'
                  }`}
                >
                  <div className={`text-lg ${student.highlight ? 'text-[#FF0033]' : 'text-white/60'}`}>
                    #{student.rank}
                  </div>
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className={student.highlight ? 'text-[#FF0033]' : 'text-white'}>{student.name}</div>
                    <div className="text-xs text-white/40">{student.points} points</div>
                  </div>
                  {student.rank <= 3 && (
                    <Award className={`w-5 h-5 ${student.rank === 1 ? 'text-[#FFD700]' : student.rank === 2 ? 'text-[#C0C0C0]' : 'text-[#CD7F32]'}`} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}