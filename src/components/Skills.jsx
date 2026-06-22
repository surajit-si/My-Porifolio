import React from 'react';
import { Layers, Database, Compass, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Tech',
      icon: <Layers className="w-5 h-5 text-accent-teal" />,
      skills: [
        { name: 'React', level: '90%' },
        { name: 'JavaScript (ES6+)', level: '85%' },
        { name: 'Tailwind CSS', level: '95%' },
        { name: 'HTML5 / CSS3', level: '90%' },
        { name: 'Responsive Web Design', level: '95%' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Database className="w-5 h-5 text-accent-violet" />,
      skills: [
        { name: 'Node.js', level: '85%' },
        { name: 'Express', level: '85%' },
        { name: 'MongoDB', level: '80%' },
        { name: 'Mongoose ODM', level: '80%' },
        { name: 'REST APIs', level: '90%' }
      ]
    },
    {
      title: 'Tools & Workflows',
      icon: <Compass className="w-5 h-5 text-yellow-400" />,
      skills: [
        { name: 'Git & GitHub', level: '85%' },
        { name: 'NPM & Bundlers', level: '80%' },
        { name: 'Postman / REST clients', level: '90%' },
        { name: 'MVC Architecture', level: '85%' },
        { name: 'JSON Web Tokens (JWT)', level: '85%' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="flex items-center gap-2 text-accent-teal text-sm font-semibold tracking-wider font-mono">
            <Layers className="w-4 h-4" />
            <span>02 // SKILLS & TECH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Toolbox & Tech Stack
          </h2>
          <div className="w-20 h-[3px] bg-accent-teal rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="p-6 glass rounded-2xl border border-white/5 bg-gray-900/10 flex flex-col space-y-6 hover-glow transition-all duration-300"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="p-2.5 rounded-lg bg-white/5">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4 text-left">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300 font-medium font-mono flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-teal" />
                        {skill.name}
                      </span>
                      <span className="text-gray-500 font-mono text-xs">{skill.level}</span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="w-full h-1.5 bg-gray-950 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent-teal to-accent-violet rounded-full transition-all duration-1000"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
