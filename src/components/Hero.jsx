import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'MERN Stack Developer',
    'Full Stack Engineer',
    'JavaScript Specialist',
    'Backend Architect'
  ];
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Mesh Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mesh-violet rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-mesh-teal rounded-full pointer-events-none z-0"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-teal/20 bg-accent-teal/5 text-accent-teal text-xs font-semibold uppercase tracking-wider font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>Available for Freelance & Full-time</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-accent-teal via-accent-violet to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
                Surajit Si
              </span>
            </h1>
            
            <div className="h-10 text-xl sm:text-2xl font-mono text-gray-300 font-medium">
              I build{' '}
              <span className="text-accent-teal border-r-2 border-accent-teal animate-pulse">
                {text}
              </span>
            </div>
            
            <p className="max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed">
              Highly passionate Full Stack Developer specializing in the MERN stack. 
              I design clean code structures, implement scalable backends with Node.js & MongoDB, 
              and build interactive frontends with React. Fast loading, responsive design, 
              and robust APIs are my signatures.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/surajit-si" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/surajit-si-682bb03a2/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href="mailto:i.am.surajit.si@gmail.com"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-teal text-gray-900 font-semibold text-sm hover:bg-teal-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] group"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#console"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-300 hover:border-white/20"
              >
                Interactive Console
              </a>
            </div>
          </div>
          
          {/* Visual Block */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            <div className="relative w-full max-w-md animate-float">
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal to-accent-violet opacity-20 blur-3xl -z-10 rounded-full"></div>
              
              {/* Premium Code Window */}
              <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gray-950/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">surajit_si.js</span>
                  <div className="w-10"></div>
                </div>
                
                {/* Window Content */}
                <div className="p-6 text-left font-mono text-xs sm:text-sm leading-relaxed text-gray-300 space-y-4">
                  <div>
                    <span className="text-purple-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-6">
                    name: <span className="text-emerald-400">'Surajit Si'</span>,
                  </div>
                  <div className="pl-6">
                    role: <span className="text-emerald-400">'MERN Stack Specialist'</span>,
                  </div>
                  <div className="pl-6">
                    skills: <span className="text-blue-400">[</span>
                    <span className="text-emerald-400">'MongoDB'</span>,{' '}
                    <span className="text-emerald-400">'Express'</span>,{' '}
                    <span className="text-emerald-400">'React'</span>,{' '}
                    <span className="text-emerald-400">'Node'</span>
                    <span className="text-blue-400">]</span>,
                  </div>
                  <div className="pl-6">
                    passion: <span className="text-emerald-400">'Building scalable web architectures'</span>,
                  </div>
                  <div className="pl-6">
                    philosophy: <span className="text-emerald-400">'Write clean, readable, robust code'</span>
                  </div>
                  <div>
                    &#125;;
                  </div>
                  <div className="pt-2 text-gray-500 text-xs">
                    // Ready to transform ideas into digital reality.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
