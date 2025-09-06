import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";

export default function HeroSection({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8 relative"
            >
              <div className="w-40 h-40 mx-auto relative">
                <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full border-4 border-primary shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-center lg:text-left"
            >
              <span className="bg-gradient-to-r from-primary via-green-400 to-primary bg-clip-text text-transparent animate-gradient">
                Phaneendra Marri
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-8 text-center lg:text-left"
            >
              Full Stack Developer <span className="text-primary">(.NET & Cloud)</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground mb-12 leading-relaxed text-center lg:text-left"
            >
              I am a passionate Full Stack Developer with 2+ years of experience building scalable web applications using .NET and modern cloud technologies. I love solving real-world problems and delivering robust, user-friendly solutions for businesses of all sizes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 group relative overflow-hidden"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ExternalLink className="w-4 h-4 ml-2 relative z-10" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                <span className="relative z-10">Get In Touch</span>
                <Mail className="w-4 h-4 ml-2 relative z-10" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border"
              >
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border"
              >
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border"
              >
                <div className="text-3xl font-bold text-primary mb-2">10</div>
                <div className="text-muted-foreground">Certifications</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border"
              >
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Hackathons</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
