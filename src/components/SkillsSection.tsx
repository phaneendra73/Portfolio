import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, Zap } from "lucide-react";

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", 
  "Node.js", "Python", "PostgreSQL", "MongoDB",
  "Docker", "AWS", "Git", "Figma"
];

const skillCards = [
  {
    icon: "Palette",
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces with modern frameworks and best practices. Focused on performance, accessibility, and user experience."
  },
  {
    icon: "Code",
    title: "Backend Development",
    description: "Building robust server-side applications, APIs, and database architectures. Ensuring scalability, security, and optimal performance."
  },
  {
    icon: "Zap",
    title: "UI/UX Design",
    description: "Designing intuitive user experiences with focus on accessibility, usability, and visual appeal. Creating designs that users love to interact with."
  }
];

interface SkillsSectionProps {
  theme: string | undefined;
}

const iconMap = {
  Palette: <Palette className="w-6 h-6 mr-2" />,
  Code: <Code className="w-6 h-6 mr-2" />,
  Zap: <Zap className="w-6 h-6 mr-2" />,
};

export default function SkillsSection({ theme }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30 relative">
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
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Tools I use to bring ideas to life</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="text-center bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-primary font-semibold">{skill}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="my-16 border-t border-border"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    {iconMap[card.icon as keyof typeof iconMap]}
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
