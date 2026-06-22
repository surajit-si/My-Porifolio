import React from 'react';
import { Briefcase, ExternalLink, Code, CheckCircle } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function Projects() {
  const project = {
    title: 'Iron Syndicate',
    subtitle: 'Boutique Strength Gym Landing Page',
    desc: 'A premium, raw, high-impact landing page designed for a boutique strength gym. It breaks away from standard soft-filter layouts, featuring a high-contrast dark aesthetic, custom live facility widgets, and neon-lime glassmorphic interactive cards.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'CSS Grid', 'SEO Optimized'],
    github: 'https://github.com/surajit-si/Gym-Landing-Page',
    live: 'https://ironsyndicate-app.netlify.app/',
    image: '/iron-syndicate.png',
    features: [
      'Live Facility Feed monitoring active occupancy and squat platform availability.',
      'High-contrast raw electric-lime visual layout tailored for premium strength athletic brands.',
      'Responsive modular components.'
    ]
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="flex items-center gap-2 text-accent-teal text-sm font-semibold tracking-wider font-mono">
            <Briefcase className="w-4 h-4" />
            <span>03 // FEATURED SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Featured Project
          </h2>
          <div className="w-20 h-[3px] bg-accent-teal rounded-full"></div>
        </div>

        {/* Single Project Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Project Visual Preview (Browser Frame) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            {/* Glowing Aura background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal to-accent-violet opacity-15 blur-3xl -z-10 rounded-full"></div>
            
            <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500 group">
              {/* Browser bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gray-950/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-xs text-gray-500 font-mono">ironsyndicate.com/preview</span>
                <div className="w-10"></div>
              </div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10] bg-gray-900 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-accent-teal/10 border border-accent-teal/20 text-accent-teal font-mono text-xs font-semibold">
              <Code className="w-3.5 h-3.5" />
              <span>SINGLE FEATURE PROJECT</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-accent-violet font-semibold uppercase tracking-wider">
                {project.subtitle}
              </p>
            </div>

            <p className="text-base text-gray-400 leading-relaxed">
              {project.desc}
            </p>

            {/* Features */}
            <div className="space-y-3 w-full">
              <h4 className="text-xs font-mono font-semibold uppercase text-gray-300 tracking-wider">Key Project Features:</h4>
              <ul className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent-teal shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-400 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 font-semibold text-sm transition-all duration-300 hover:border-white/20"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <a
                href={project.live}
                className="flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-auto rounded-xl bg-accent-teal text-gray-900 font-semibold text-sm hover:bg-teal-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]"
              >
                <span>Live Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
