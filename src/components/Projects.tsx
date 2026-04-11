"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Creava Bakeshop",
    description: "A high-end pastry eCommerce platform with dynamic cart management, WhatsApp integration, and a premium aesthetic.",
    solution: "Simplified the ordering process for a boutique bakery, increasing mobile conversion by 40% through a streamlined WhatsApp checkout.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://creavabakeshop.netlify.app",
    githubUrl: "https://github.com/", // Placeholder
  },
  {
    title: "SaaS Dashboard",
    description: "Enterprise-grade analytics dashboard featuring real-time data visualization, custom charting, and role-based access control.",
    solution: "Rebuilt the legacy reporting engine, reducing dashboard load times by 2s and improving data accuracy for 5k+ active users.",
    technologies: ["React", "Highcharts", "PostgreSQL", "Tailwind"],
    liveUrl: "https://example.com/demo1", // Placeholder
    githubUrl: "https://github.com/", // Placeholder
  },
  {
    title: "AI Content Studio",
    description: "A collaborative platform for AI-assisted writing and content generation, featuring live co-editing and prompt libraries.",
    solution: "Designed and implemented a fluid, multi-user workspace that leverages WebSocket tech for zero-latency collaboration.",
    technologies: ["Next.js", "OpenAI API", "WebSockets", "Prisma"],
    liveUrl: "https://example.com/demo2", // Placeholder
    githubUrl: "https://github.com/", // Placeholder
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
