"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Monitor } from "lucide-react";
import PreviewModal from "./PreviewModal";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

interface Project {
  title: string;
  description: string;
  solution: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePreviewClick = () => {
    if (isMobile) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="group relative glass rounded-3xl overflow-hidden flex flex-col h-full hover:border-primary/40 transition-all duration-500"
      >
        {/* Project Image Placeholder */}
        <div className="aspect-video w-full bg-surface-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
             <p className="text-sm font-medium text-white/90 translate-y-4 group-hover:translate-y-0 transition-transform">
               {project.solution}
             </p>
          </div>
          <div className="flex items-center justify-center h-full text-foreground/20 font-bold text-2xl group-hover:scale-110 transition-transform duration-700">
            {project.title}
          </div>
        </div>

        <div className="p-8 flex flex-col flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-foreground/60 mb-8 line-clamp-3 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="mt-auto grid grid-cols-2 gap-4">
            <button
              onClick={handlePreviewClick}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-xl text-sm font-semibold transition-all hover:bg-primary/90 active:scale-95"
            >
              <Monitor className="w-4 h-4" />
              Live Preview
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 glass hover:bg-white/5 rounded-xl text-sm font-semibold transition-all active:scale-95"
            >
              <GithubIcon className="w-4 h-4" />
              View Code
            </a>
          </div>
        </div>
      </motion.div>

      <PreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={project.liveUrl}
        title={project.title}
      />
    </>
  );
}
