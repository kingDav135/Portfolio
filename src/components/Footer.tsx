export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold tracking-tighter">
           <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-[10px] text-white">A</div>
           <span>Adeola Lagos</span>
        </div>
        
        <p className="text-sm text-foreground/40">
          © {currentYear} Lagos, Nigeria. Built with Next.js & Framer Motion.
        </p>
        
        <div className="flex gap-6 text-sm text-foreground/60">
           <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
           <a href="#about" className="hover:text-primary transition-colors">About</a>
           <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
