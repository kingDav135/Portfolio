"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Creava Bakeshop",
    description: "A high-end pastry eCommerce platform with dynamic cart management, WhatsApp integration, and a premium aesthetic.",

    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://creavabakeshop.netlify.app",
    githubUrl: "https://github.com/kingDav135/Creavabakeshop",
    image: {
      src: "./creava.png",
      alt: "Screenshot of the Creava Bakeshop storefront",
    },
  },
  {
    title: "Resume Generator",
    description: "A streamlined resume builder platform that helps users create polished resumes through a guided editing experience and live builder workflow.",
    technologies: ["React", "JavaScript", "CSS", "Netlify"],
    liveUrl: "https://resumeflowapp.netlify.app/",
    githubUrl: "https://github.com/kingDav135/Resume-Generator/",
    image: {
      src: "./resumeflow.png",
      alt: "Screenshot of the Resume Generator app interface",
    },
  },
  {
    title: "Edunotech Website",
    description: "A modern education-focused website built to present EdunoTech's digital offering with a clean interface and clear conversion paths.",
    technologies: ["React", "JavaScript", "CSS", "Netlify"],
    liveUrl: "https://edunotech.netlify.app/",
    githubUrl: "https://github.com/kingDav135/Edunotech-Website",
    image: {
      src: "./edunotech.png",
      alt: "Screenshot of the Edunotech landing page",
    },
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            A selection of high-impact projects where I&apos;ve helped businesses scale and users succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
