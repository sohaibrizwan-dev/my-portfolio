import { Github, Linkedin, Mail, ArrowUp, Heart, Code, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress for button
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });

    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [smoothProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }),
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      rotate: -5
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Calculate progress percentage for display
  const progressPercentage = scrollProgress * 100;
  const circumference = 283;
  const offset = circumference - (circumference * scrollProgress);

  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-background via-card/50 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div 
          variants={glowVariants}
          animate="animate"
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(122, 75, 255, 0.2)' }}
        />
        <motion.div 
          variants={glowVariants}
          animate="animate"
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            backgroundColor: 'rgba(30, 215, 255, 0.2)',
            animationDelay: '1.5s' 
          }}
        />
      </div>

      <motion.div 
        className="relative container mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h3 
              className="text-3xl font-bold mb-3 cursor-pointer inline-block"
              style={{
                background: 'linear-gradient(135deg, #7a4bff, #1ed7ff, #c06bff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Sohaib Rizwan
            </motion.h3>
            <motion.p 
              className="text-muted-foreground text-sm leading-relaxed"
              variants={itemVariants}
            >
              Crafting digital experiences that blend innovation with elegance. Let's build something extraordinary together.
            </motion.p>
            <motion.div 
              className="flex items-center gap-2 text-sm"
              variants={itemVariants}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-4 h-4" style={{ color: '#7a4bff' }} />
              </motion.div>
              <span className="text-muted-foreground">Built with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4" style={{ color: '#1ed7ff', fill: '#1ed7ff' }} />
              </motion.div>
              <span className="text-muted-foreground">and React</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" style={{ color: '#7a4bff' }} />
              </motion.div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li 
                  key={link.id}
                  custom={i}
                  variants={linkVariants}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground group relative"
                    whileHover={{ x: 8, color: '#7a4bff' }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-0.5"
                        style={{
                          background: 'linear-gradient(90deg, #7a4bff, #1ed7ff)'
                        }}
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-3 text-sm">
              {["Frontend Development", "WordPress Solutions", "AI Integration", "UI/UX Design"].map((service, i) => (
                <motion.li 
                  key={service}
                  custom={i}
                  variants={linkVariants}
                  whileHover={{ x: 4, color: '#1ed7ff' }}
                  className="text-muted-foreground cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Let's Connect</h4>
            <motion.p 
              className="text-sm text-muted-foreground mb-4"
              variants={itemVariants}
            >
              Ready to start your next project? Let's talk!
            </motion.p>
            <div className="flex gap-3">
              {[
                { href: "https://github.com", Icon: Github, label: "GitHub", isPrimary: true },
                { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn", isPrimary: true },
                { href: "mailto:contact@sohaibrizwan.dev", Icon: Mail, label: "Email", isPrimary: false }
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-background/50 backdrop-blur-sm border transition-all shadow-lg"
                  style={{
                    borderColor: social.isPrimary ? 'rgba(122, 75, 255, 0.2)' : 'rgba(30, 215, 255, 0.2)'
                  }}
                  aria-label={social.label}
                  custom={i}
                  variants={socialVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    borderColor: social.isPrimary ? '#7a4bff' : '#1ed7ff',
                    backgroundColor: social.isPrimary ? 'rgba(122, 75, 255, 0.1)' : 'rgba(30, 215, 255, 0.1)',
                    boxShadow: social.isPrimary 
                      ? '0 10px 40px rgba(122, 75, 255, 0.3)' 
                      : '0 10px 40px rgba(30, 215, 255, 0.3)',
                    transition: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  whileTap={{ scale: 0.95, rotate: -5 }}
                  viewport={{ once: true }}
                >
                  <social.Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider with Animation */}
        <motion.div 
          className="relative h-px mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(122, 75, 255, 0.5), transparent)'
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            © {new Date().getFullYear()} Sohaib Rizwan. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex items-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item, i) => (
              <div key={item} className="flex items-center gap-6">
                {i > 0 && <span style={{ color: 'rgba(122, 75, 255, 0.3)' }}>•</span>}
                <motion.button 
                  className="transition-colors"
                  whileHover={{ scale: 1.05, color: '#7a4bff' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button - Fixed Position with Enhanced Animation */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl group overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #7a4bff, #1ed7ff, #c06bff)',
            boxShadow: '0 20px 60px rgba(122, 75, 255, 0.5)'
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          aria-label="Scroll to top"
        >
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(122, 75, 255, 0.2)"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: 'stroke-dashoffset 0.3s ease' }}
            />
          </svg>
          
          {/* Animated Background Pulse */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #1ed7ff, #7a4bff, #c06bff)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Icon with Enhanced Animation */}
          <motion.div
            animate={{
              y: [0, -3, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowUp className="h-5 w-5 text-white relative z-10" />
          </motion.div>
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;