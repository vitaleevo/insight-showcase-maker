import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/almafrans-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: "Sobre Nós", href: "/#about" },
      { name: "Serviços", href: "/#services" },
      { name: "Sectores", href: "/#sectors" },
      { name: "Contacto", href: "/#contact" }
    ],
    services: [
      { name: "Segurança Marítima", href: "/#services" },
      { name: "Combate a Incêndio", href: "/#services" },
      { name: "Gases Industriais", href: "/#services" },
      { name: "Gestão de Armazém", href: "/#services" }
    ]
  };

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/40" />
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div className="flex items-center gap-3 mb-6" whileHover={{ scale: 1.02 }}>
              <img src={logo} alt="ALMAFRANS" className="h-14 w-auto object-contain" loading="lazy" />
            </motion.div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              Empresa de direito 100% angolano, especializada em comércio e prestação de serviços
              de segurança industrial e marítima.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="social"
                  className="w-10 h-10 rounded-lg bg-muted/60 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-foreground">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-foreground">Serviços</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-foreground">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Av. 4 de fevereiro, prédio nº23, 3º Andar<br />
                  ( Junto ao porto de luanda )
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">(+244) 928 867 132</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@almafrans.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} ALMAFRANS - Comércio e Prestação de Serviços, Lda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
