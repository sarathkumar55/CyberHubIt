import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Zap, ChevronRight, Lock, Shield, Terminal, Code, Network, Database, Cpu } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function HeroSection() {
  const [binaryStrings, setBinaryStrings] = useState<string[]>([]);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles for network effect
  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
      });
    }
    setParticles(newParticles);
  }, []);

  // Generate binary rain effect
  useEffect(() => {
    const strings: string[] = [];
    for (let i = 0; i < 20; i++) {
      let binary = '';
      for (let j = 0; j < 30; j++) {
        binary += Math.random() > 0.5 ? '1' : '0';
      }
      strings.push(binary);
    }
    setBinaryStrings(strings);
  }, []);

  // Terminal hacking simulation
  useEffect(() => {
    const lines = [
      '> Initializing secure connection...',
      '> Loading encryption modules...',
      '> Running penetration tests...',
      '> System access: GRANTED',
      '> Welcome to CyberHUB IT Academy'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < lines.length) {
        setTerminalLines(prev => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Creative Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient with radial glow */}
        <div className="absolute inset-0 bg-gradient-radial from-[#1A0505] via-[#0A0A0A] to-[#0A0A0A]" />
        
        {/* Animated network mesh with particles */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <radialGradient id="particleGlow">
              <stop offset="0%" stopColor="#FF0033" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF0033" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Connection lines between particles */}
          {particles.map((particle, i) => 
            particles.slice(i + 1).map((otherParticle, j) => {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 15) {
                return (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={`${particle.x}%`}
                    y1={`${particle.y}%`}
                    x2={`${otherParticle.x}%`}
                    y2={`${otherParticle.y}%`}
                    stroke="#FF0033"
                    strokeWidth="1"
                    strokeOpacity={0.3 - (distance / 50)}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Particles/nodes */}
          {particles.map((particle) => (
            <motion.circle
              key={particle.id}
              cx={`${particle.x}%`}
              cy={`${particle.y}%`}
              r="2"
              fill="url(#particleGlow)"
              animate={{
                cx: [`${particle.x}%`, `${(particle.x + particle.vx * 100) % 100}%`],
                cy: [`${particle.y}%`, `${(particle.y + particle.vy * 100) % 100}%`],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </svg>

        {/* Floating hexagon patterns */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${40 + Math.random() * 60}px`,
                height: `${40 + Math.random() * 60}px`,
              }}
              animate={{
                y: [0, -50, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
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
        </div>

        {/* Data stream particles flowing upward */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-1 h-8 bg-gradient-to-b from-transparent via-[#FF0033] to-transparent"
            style={{
              left: `${5 + i * 5}%`,
              bottom: '-10%',
            }}
            animate={{
              y: [0, -1200],
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

        {/* Pulsing radar circles */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`radar-left-${i}`}
              className="absolute rounded-full border border-[#FF0033]"
              style={{
                width: '200px',
                height: '200px',
                top: '-100px',
                left: '-100px',
              }}
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.3,
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`radar-right-${i}`}
              className="absolute rounded-full border border-[#E50914]"
              style={{
                width: '200px',
                height: '200px',
                top: '-100px',
                left: '-100px',
              }}
              animate={{
                scale: [1, 3, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            />
          ))}
        </div>

        {/* Glowing orbs with pulse effect */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF0033]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E50914]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        {/* Digital scan lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 51, 0.03) 2px, rgba(255, 0, 51, 0.03) 4px)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Floating data chips */}
        {[Database, Network, Cpu].map((Icon, i) => (
          <motion.div
            key={`chip-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1,
            }}
          >
            <Icon className="w-24 h-24 text-[#FF0033]" strokeWidth={0.5} />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF0033]/30 bg-[#FF0033]/5 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 text-[#FF0033]" />
            <span className="text-sm text-[#FF0033]">Elite Cybersecurity Training 2025</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl leading-tight"
          >
            Empowering <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0033] via-[#E50914] to-[#FF0033]"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              the Next Gen
            </motion.span>
            <br />
            Cyber <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0033] via-[#E50914] to-[#FF0033]"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              Warriors
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-xl"
          >
            Master Ethical Hacking · SOC Operations · Cyber Forensics · Real-Time Cyber Defense Skills
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 51, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#FF0033] to-[#E50914] text-white rounded-lg flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Courses</span>
              <ChevronRight className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#E50914] to-[#FF0033] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 pt-8"
          >
            {[
              { value: '6K+', label: 'Students' },
              { value: '98%', label: 'Placement' },
              { value: '200+', label: 'Partners' }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="text-3xl text-white group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-sm text-[#FF0033]">{stat.label}</div>
                <div className="absolute inset-0 bg-[#FF0033]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Creative Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[600px] flex items-center justify-center"
        >
          {/* Rotating hexagon rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${300 + i * 120}px`,
                height: `${300 + i * 120}px`,
              }}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full" style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                border: '2px solid rgba(255, 0, 51, 0.2)',
              }} />
            </motion.div>
          ))}

          {/* Central terminal/hacking display */}
          <motion.div
            className="relative z-10 w-[400px] h-[500px] rounded-2xl border-2 border-[#FF0033]/30 bg-[#0A0A0A]/90 backdrop-blur-xl overflow-hidden"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 0, 51, 0.2)',
                '0 0 40px rgba(255, 0, 51, 0.4)',
                '0 0 20px rgba(255, 0, 51, 0.2)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {/* Terminal header */}
            <div className="px-4 py-3 border-b border-[#FF0033]/20 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF0033]" />
                <div className="w-3 h-3 rounded-full bg-[#E50914]" />
                <div className="w-3 h-3 rounded-full bg-[#FF0033]/50" />
              </div>
              <div className="flex items-center gap-2 ml-auto text-xs text-[#FF0033]">
                <Terminal className="w-4 h-4" />
                <span>cyber-terminal.sh</span>
              </div>
            </div>

            {/* Terminal content */}
            <div className="p-4 font-mono text-sm space-y-2">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[#FF0033] flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  <span>{'>'}</span>
                  <span>{line}</span>
                  {i === terminalLines.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-[#FF0033] ml-1"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Binary rain overlay */}
            <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
              {binaryStrings.slice(0, 10).map((binary, i) => (
                <motion.div
                  key={i}
                  className="absolute text-[10px] text-[#FF0033] whitespace-nowrap"
                  style={{
                    left: `${i * 10}%`,
                    top: '-20px',
                    fontFamily: 'var(--font-mono)'
                  }}
                  animate={{
                    y: [0, 600],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "linear"
                  }}
                >
                  {binary}
                </motion.div>
              ))}
            </div>

            {/* Circuit pattern overlay */}
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Circuit lines */}
                <motion.path
                  d="M 0 100 L 50 100 L 70 80 L 100 80 L 120 100 L 200 100"
                  stroke="#FF0033"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.path
                  d="M 100 0 L 100 50 L 120 70 L 120 100"
                  stroke="#FF0033"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                <circle cx="100" cy="80" r="5" fill="#FF0033">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="120" cy="100" r="5" fill="#FF0033">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </circle>
              </svg>
            </div>

            {/* Floating security icons */}
            <div className="absolute inset-0 pointer-events-none">
              {[Lock, Shield, Code].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <Icon className="w-6 h-6 text-[#FF0033]/30" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating status cards */}
          <motion.div
            className="absolute top-8 -left-8 px-4 py-2 bg-[#1A1A1A]/90 backdrop-blur-sm border border-[#FF0033] rounded-lg"
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-xs text-[#FF0033] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF0033] animate-pulse" />
              <span>System Secured</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-16 -right-8 px-4 py-2 bg-[#1A1A1A]/90 backdrop-blur-sm border border-[#FF0033] rounded-lg"
            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <div className="text-xs text-[#FF0033] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF0033] animate-pulse" />
              <span>Real-Time Training</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[#FF0033] tracking-widest">SCROLL TO EXPLORE</span>
          <svg className="w-6 h-10 border-2 border-[#FF0033] rounded-full p-1">
            <motion.circle
              cx="12"
              cy="8"
              r="3"
              fill="#FF0033"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}