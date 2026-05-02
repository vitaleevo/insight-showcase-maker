import { motion } from "framer-motion";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Shield, ChevronRight, HardHat, ArrowRight } from "lucide-react";

const SafetyFootwear = () => {
  const boots = products.filter(p => p.id.includes("portwest") || p.id.includes("jallatte") || p.id.includes("v12"));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Equipamento de Proteção Individual
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Calçado de <span className="text-gradient-primary">Segurança Profissional</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore a nossa gama premium de botas de segurança certificadas. 
              Trabalhamos com as melhores marcas mundiais como Portwest, Jallatte e V12 
              para garantir a máxima proteção e conforto em ambientes industriais e offshore.
            </p>
          </motion.div>

          {/* Boots Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boots.map((boot, index) => (
              <motion.div
                key={boot.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl border border-border/60 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img 
                    src={boot.image} 
                    alt={boot.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {boot.specifications.some(s => s.toUpperCase().includes("S3")) && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-primary border border-primary/20 shadow-sm">
                      Certificado S3
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                    <HardHat className="w-3 h-3" />
                    {boot.id.split('-')[0]}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {boot.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {boot.description}
                  </p>
                  
                  <Link 
                    to={`/product/${boot.id}`}
                    className="inline-flex items-center gap-2 text-foreground font-bold group/btn"
                  >
                    Ver Especificações Técnicas
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 p-12 rounded-[3rem] bg-primary text-primary-foreground text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 gradient-mesh opacity-20" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Necessita de um catálogo completo ou cotação?
              </h2>
              <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
                Temos soluções personalizadas para equipar a sua equipa com o melhor calçado de segurança do mercado.
              </p>
              <a 
                href="https://wa.me/244928867132"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-white/90 transition-all shadow-xl"
              >
                Fale com um Especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SafetyFootwear;
