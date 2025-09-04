import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-green-400 animate-gradient"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-6"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: "#00ff41" }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: "#00ff41" }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: "#00ff41" }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
        <p className="text-muted-foreground">
          © 2024 John Doe. Crafted with <span className="text-primary">❤️</span> using Next.js and shadcn/ui.
        </p>
      </div>
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </footer>
  );
}
