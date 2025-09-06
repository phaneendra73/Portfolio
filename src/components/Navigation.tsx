import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Moon, Sun } from "lucide-react";

interface NavigationProps {
  theme: string | undefined;
  mounted: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  toggleTheme: () => void;
}

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Navigation({ theme, mounted, activeSection, scrollToSection, toggleTheme }: NavigationProps) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      mounted && window.scrollY > 50 ? "bg-card/95 backdrop-blur-md border-b border-border py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Code className="w-4 h-4 text-primary-foreground" />
            </div>
            <span
              className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${mounted ? (theme === "light" ? "from-primary to-green-400" : "from-primary to-green-400") : "from-primary to-green-400"}`}
            >
              Phaneendra Marri
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {mounted && sections.map((section, index) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                  activeSection === section
                    ? theme === "light"
                      ? "text-green-700"
                      : "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute -bottom-2 left-0 right-0 h-0.5 ${theme === "light" ? "bg-green-300" : "bg-primary"}`}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-all duration-300 hover:bg-primary/20"
              disabled={!mounted}
            >
              {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button 
              variant="outline" 
              className="md:hidden"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu?.classList.toggle("hidden");
              }}
            >
              Menu
            </Button>
          </div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden mt-4 space-y-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block w-full text-left text-sm font-medium transition-colors hover:text-primary py-2 ${
                activeSection === section ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
