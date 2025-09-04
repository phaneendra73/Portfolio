import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and AI-powered recommendations.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/project1.jpg",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and gamification features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/project2.jpg",
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with interactive charts and predictive analytics.",
    technologies: ["Next.js", "D3.js", "Python", "PostgreSQL"],
    image: "/project3.jpg",
    link: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Showcasing my latest work and innovations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-primary group-hover:text-green-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="w-1/2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-1/2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View 2
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
