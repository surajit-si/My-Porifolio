import React from 'react';
import { User, ShieldAlert, Cpu, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  const qualities = [
    {
      icon: <Cpu className="w-5 h-5 text-accent-teal" />,
      title: 'Full Stack Integration',
      desc: 'Seamlessly binding MongoDB databases, Express route controls, React client UI, and Node backend flows.'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-purple-400" />,
      title: 'Clean Code Standard',
      desc: 'Writing maintainable, modular, and well-documented JavaScript following modern ES6+ standards.'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-accent-violet" />,
      title: 'Security & Optimization',
      desc: 'Implementing secure API gateways, validating requests, hashing credentials, and caching when necessary.'
    },
    {
      icon: <Heart className="w-5 h-5 text-pink-400" />,
      title: 'User Centered Focus',
      desc: 'Ensuring fluid layouts, responsive designs, fast load times, and intuitive interactions.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="flex items-center gap-2 text-accent-teal text-sm font-semibold tracking-wider font-mono">
            <User className="w-4 h-4" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Building Digital Products With Purpose
          </h2>
          <div className="w-20 h-[3px] bg-accent-teal rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Content */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <h3 className="text-2xl font-bold text-white">
              Who is Surajit Si?
            </h3>
            
            <p className="text-gray-400 leading-relaxed text-base">
              I am a dedicated MERN Stack Web Developer who loves creating beautiful web applications that solve real-world problems. 
              My journey into programming started from a deep curiosity about how digital interfaces work, which quickly grew into a passion for complete stack development.
            </p>
            
            <p className="text-gray-400 leading-relaxed text-base">
              I spend my time structuring RESTful APIs, optimizing MongoDB queries, and designing responsive React interfaces. 
              I believe that standard templates can feel robotic; instead, I prioritize custom, premium experiences tailored specifically to the project's vision.
            </p>

            <div className="p-5 glass rounded-xl border border-white/5 bg-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-teal animate-ping"></div>
                <h4 className="font-semibold text-white text-sm font-mono">My Development Core Philosophy</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">
                "Code should not just compile. It must be clean, secure, responsive, and easy to maintain by another developer. True development bridges functional engineering with high-fidelity design."
              </p>
            </div>
          </div>

          {/* Qualities Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {qualities.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 glass rounded-2xl border border-white/5 bg-gray-900/10 hover-glow transition-all duration-300 flex flex-col items-start text-left space-y-3"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
