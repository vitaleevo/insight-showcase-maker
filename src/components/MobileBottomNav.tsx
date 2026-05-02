import { motion } from "framer-motion";
import { Home, Package, Shield, MessageCircle, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileBottomNav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { icon: Home, label: "Início", href: "/" },
    { icon: Package, label: "Produtos", href: "/calcado-seguranca" },
    { icon: Shield, label: "Serviços", href: "/#services" },
    { icon: MessageCircle, label: "Contacto", href: "/#contact" },
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/244928867132"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl z-50 lg:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Phone className="w-7 h-7 fill-white" />
      </motion.a>

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-border py-3 px-6 z-50 lg:hidden flex justify-between items-center safe-area-bottom">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href || (item.href.startsWith("/#") && isHome);
          
          return (
            <Link 
              key={item.label} 
              to={item.href}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "fill-primary/10" : ""}`} />
              <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default MobileBottomNav;
