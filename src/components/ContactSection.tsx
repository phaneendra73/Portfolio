import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Let's create something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-2 text-primary" />
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to work on new projects and collaborate with creative minds. 
              Whether you have a specific project in mind or just want to discuss ideas, 
              I'd love to hear from you!
            </p>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg border border-border"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:phaneendra3377@gmail.com" className="text-muted-foreground hover:underline">phaneendra3377@gmail.com</a>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg border border-border"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <a href="https://github.com/phaneendra73" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">github.com/phaneendra73</a>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg border border-border"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/phaneendra73/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">linkedin.com/in/phaneendra73</a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  Send Message
                  <Mail className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
