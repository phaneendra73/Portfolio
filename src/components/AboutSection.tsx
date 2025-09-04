import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Palette, Code } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Passionate about creating digital magic</p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a creative full-stack developer who believes in the power of technology to transform ideas into reality. 
                With over 5 years of experience, I've worked on everything from startups to enterprise applications, 
                always focusing on creating exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical expertise with creative problem-solving. I specialize in modern web technologies 
                and stay at the forefront of emerging trends to deliver innovative solutions that make a real impact.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  Fast Learner
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Palette className="w-4 h-4 mr-2" />
                  Creative Thinker
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Code className="w-4 h-4 mr-2" />
                  Clean Code
                </Badge>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">B.S. Computer Science</p>
                <p className="text-muted-foreground">Tech University, 2018</p>
                <p className="text-sm text-muted-foreground mt-2">Graduated Magna Cum Laude</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">San Francisco, CA</p>
                <p className="text-sm text-muted-foreground">Available for remote work</p>
                <p className="text-sm text-muted-foreground">Open to relocation</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
