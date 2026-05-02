import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/almafrans-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Produtos", href: "#products" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-secondary/60 backdrop-blur-md border-b border-border/40 py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+244928867132" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>(+244) 928 867 132</span>
            </a>
            <a href="mailto:info@almafrans.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@almafrans.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Empresa 100% Angolana · ISO 9001
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`fixed top-0 lg:top-9 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "gradient-glass shadow-soft border-b border-border/40"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.a href="#home" className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
              <img src={logo} alt="ALMAFRANS" className="h-12 w-12 object-contain" width={48} height={48} />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-display font-bold text-lg tracking-tight text-foreground">
                  ALMAFRANS
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Safety · Marine · Industrial
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full border border-border/40 bg-card/40 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild variant="default" size="default" className="shadow-button rounded-full group">
                <a href="#contact">
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden gradient-glass border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button asChild className="mt-4 shadow-button rounded-full">
                  <a href="#contact">Solicitar Orçamento</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
