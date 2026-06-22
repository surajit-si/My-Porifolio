import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: "Welcome to Surajit Si's Developer Terminal [Version 1.0.0]" },
    { type: 'output', text: "Type 'help' to view all available commands and interactive sections." },
    { type: 'output', text: "" }
  ]);
  
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', text: `surajit_si@portfolio ~ % ${input}` }];
      
      if (command === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      let output = '';

      switch (command) {
        case 'help':
          output = `Available commands:
  about    - Discover Surajit's background and development philosophies.
  skills   - Lists core full stack technology metrics.
  projects - Displays active works and placeholders.
  connect  - Fetch direct email and active profiles (GitHub, LinkedIn).
  clear    - Clear all terminal output history.`;
          break;
        case 'about':
          output = `Surajit Si | Full Stack Developer
------------------------------------
Specialization: MERN Stack Architecture
Philosophy: Write clear, optimized, secure code built for people.
Interest: Designing clean database queries and creating custom responsive animations.
Status: Open for Freelance & Full-time opportunities.`;
          break;
        case 'skills':
          output = `Core Tech Capabilities:
-----------------------
- Frontend: HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS
- Backend:  Node.js, Express, RESTful APIs, MVC architecture
- Database: MongoDB, Mongoose ODM, dynamic aggregations
- Tools:    Git, GitHub, NPM, Postman`;
          break;
        case 'projects':
          output = `Featured Project Showcase:
--------------------------
1. Iron Syndicate
   - Premium Boutique Strength Gym landing page featuring live occupancy feeds and raw styling.
   - GitHub: https://github.com/surajit-si`;
          break;
        case 'connect':
          output = `Connect Channels:
-----------------
- Email:     i.am.surajit.si@gmail.com
- GitHub:    https://github.com/surajit-si
- LinkedIn:  https://www.linkedin.com/in/surajit-si-682bb03a2/`;
          break;
        case '':
          output = '';
          break;
        default:
          output = `Command not found: '${command}'. Type 'help' to show all valid commands.`;
      }

      if (output) {
        newHistory.push({ type: 'output', text: output });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <section id="console" className="py-24 relative overflow-hidden bg-gray-950/40">
      {/* Visual background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mesh-teal rounded-full opacity-10 pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12 space-y-3">
          <div className="flex items-center gap-2 text-accent-teal text-sm font-semibold tracking-wider font-mono">
            <TerminalIcon className="w-4 h-4" />
            <span>04 // SHELL INTERACTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Developer Console Shell
          </h2>
          <p className="text-gray-400 text-sm max-w-md text-left">
            Interact with the portfolio directly using a mock Linux shell command prompt.
          </p>
          <div className="w-20 h-[3px] bg-accent-teal rounded-full"></div>
        </div>

        {/* Terminal Window */}
        <div 
          onClick={focusInput}
          className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[450px] cursor-text bg-gray-950/75"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gray-950/80 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-teal" />
              <span>bash - surajit@portfolio</span>
            </div>
            <div className="w-12"></div>
          </div>

          {/* Body Logs */}
          <div className="flex-1 p-6 overflow-y-auto font-mono text-xs sm:text-sm text-left space-y-3 custom-scrollbar">
            {history.map((log, idx) => (
              <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                {log.type === 'input' ? (
                  <span className="text-accent-teal font-semibold">{log.text}</span>
                ) : (
                  <span className="text-gray-300">{log.text}</span>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Shell Input Line */}
          <div className="px-6 py-4 border-t border-white/5 bg-gray-950/60 flex items-center gap-2 font-mono text-xs sm:text-sm">
            <ChevronRight className="w-4 h-4 text-accent-teal" />
            <span className="text-accent-teal select-none">surajit_si@portfolio ~ %</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent text-white border-none outline-none focus:ring-0 p-0 font-mono placeholder-gray-600"
              placeholder="type help..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <span className="terminal-cursor"></span>
          </div>

        </div>

      </div>
    </section>
  );
}
