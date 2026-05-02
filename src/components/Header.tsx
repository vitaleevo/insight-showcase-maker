import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowRight, ChevronDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/almafrans-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: isHome ? "#home" : "/#home" },
    { name: "Sobre", href: isHome ? "#about" : "/#about" },
    { name: "Serviços", href: isHome ? "#services" : "/#services" },
    { name: "Produtos", href: isHome ? "#products" : "/#products", hasDropdown: true },
    { name: "Contacto", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+244928867132" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>(+244) 928 867 132</span>
            </a>
            <a href="mailto:info@almafrans.com" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@almafrans.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Empresa 100% Angolana · ISO 9001
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`fixed top-0 lg:top-9 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-border/40 ${
          isScrolled ? "shadow-soft" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="ALMAFRANS" className="h-14 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full border border-border/40 bg-white shadow-soft">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setIsProductDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsProductDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all font-medium flex items-center gap-1"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isProductDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white border border-border shadow-xl rounded-2xl p-2 z-[60]"
                        >
                          <Link 
                            to="/calcado-seguranca"
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 text-sm font-medium text-foreground transition-colors group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                              <Shield className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="font-bold">Calçado de Segurança</p>
                              <p className="text-[10px] text-muted-foreground">Botas Certificadas S3</p>
                            </div>
                          </Link>
                          {/* Add more categories here later */}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild variant="default" size="default" className="shadow-button rounded-full group">
                <a href="https://wa.me/244928867132" target="_blank" rel="noopener noreferrer">
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
              className="lg:hidden bg-white border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground hover:text-primary transition-colors font-medium py-2 flex items-center justify-between"
                      onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                    {link.hasDropdown && (
                      <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-border pl-4">
                        <Link 
                          to="/calcado-seguranca"
                          className="text-sm text-muted-foreground hover:text-primary py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Calçado de Segurança (S3)
                        </Link>
                      </div>
                    )}
                  </div>
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

