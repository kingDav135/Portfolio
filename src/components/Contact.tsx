"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Contact() {
  const whatsappNumber = "2348162985334"; // Fixed based on context/placeholder if known, or kept
  const emailAddress = "opeyemidavidolowookere@gmail.com";
  
  return (
    <section id="contact" className="py-24 px-4 bg-surface-900/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let&apos;s build something <span className="text-gradient">exceptional</span>.</h2>
            <p className="text-foreground/60 text-lg mb-10 leading-relaxed">
              Whether you need a full-scale web application or a striking landing page, I&apos;m here to help you bring your vision to life. Based in Lagos, available globally.
            </p>
            
            <div className="space-y-6">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-lg font-medium">{emailAddress}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-lg font-medium">Chat with me instantly</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 mt-10">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-primary transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-primary transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 glass rounded-[2.5rem] relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/70">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/70">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/70">Project Subject</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-all"
                  placeholder="E-commerce Website"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/70">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all active:scale-[0.98] premium-shadow"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
