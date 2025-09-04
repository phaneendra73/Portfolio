("use client");
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/SkillsSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { useTheme } from "next-themes";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [floatingParticles, setFloatingParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; duration: number }>
  >([]);

  // useEffect to handle client-side mounting
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Section highlight logic
      const sectionIds = ["home", "about", "skills", "projects", "contact"];
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Generate particles only on client
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
    }));
    setFloatingParticles(particles);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Don't render theme toggle until mounted to avoid hydration mismatch
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Mouse cursor effect */}
      <div
        className="fixed w-96 h-96 bg-primary/10 rounded-full pointer-events-none blur-3xl transition-transform duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: `scale(${isScrolled ? 0.5 : 1})`,
        }}
      />

      {/* Floating particles */}
      {floatingParticles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {floatingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bg-primary rounded-full opacity-20"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Navigation moved to its own component */}
      <Navigation
        theme={theme}
        mounted={mounted}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        toggleTheme={toggleTheme}
      />

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      <AboutSection />

      {/* Skills Section */}
      <SkillsSection theme={theme} />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
