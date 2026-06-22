import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('i.am.surajit.si@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-950/20 border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-mesh-violet opacity-10 pointer-events-none -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="flex items-center gap-2 text-accent-teal text-sm font-semibold tracking-wider font-mono">
            <MessageSquare className="w-4 h-4" />
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Connect With Me
          </h2>
          <div className="w-20 h-[3px] bg-accent-teal rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <h3 className="text-2xl font-bold text-white">
              Let's build something awesome
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              I am open to projects, contract works, full stack roles, or general developer networking. 
              Drop me a mail or ping my LinkedIn, and I will get back to you within 24 hours.
            </p>

            {/* Email Copier Card */}
            <div className="p-5 glass rounded-2xl border border-white/5 bg-gray-900/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-teal/10 border border-accent-teal/20 text-accent-teal">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs text-gray-500 font-mono">Direct Mail</p>
                  <p className="text-sm font-semibold text-white font-mono">i.am.surajit.si@gmail.com</p>
                </div>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Copy to Clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/surajit-si" 
                target="_blank" 
                rel="noreferrer"
                className="p-5 glass rounded-2xl border border-white/5 bg-gray-900/10 hover-glow transition-all duration-300 flex flex-col items-start space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono">Source code</p>
                  <p className="text-sm font-semibold text-white font-mono">GitHub Profile</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/surajit-si-682bb03a2/" 
                target="_blank" 
                rel="noreferrer"
                className="p-5 glass rounded-2xl border border-white/5 bg-gray-900/10 hover-glow transition-all duration-300 flex flex-col items-start space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono">Professional network</p>
                  <p className="text-sm font-semibold text-white font-mono">LinkedIn Profile</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 glass rounded-3xl border border-white/5 bg-gray-900/5 shadow-2xl relative">
              {submitted && (
                <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center space-y-3 z-20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center animate-bounce">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-gray-400">Thank you, Surajit will reach out back soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:border-accent-teal font-mono text-sm"
                      placeholder="Anit Kumar"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:border-accent-teal font-mono text-sm"
                      placeholder="anit@domain.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:border-accent-teal font-mono text-sm resize-none"
                    placeholder="Hello, I want to discuss a portfolio implementation project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-teal text-gray-900 font-semibold hover:bg-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.35)] transition-all duration-300 group"
                >
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Surajit Si. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed & Handcrafted in India</p>
        </div>

      </div>
    </section>
  );
}
