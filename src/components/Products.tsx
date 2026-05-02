import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// Service images
import lifejacket from "@/assets/services/lifejacket.jpg";
import fireExtinguishers from "@/assets/services/fire-extinguishers.jpg";
import safetyBoots from "@/assets/services/safety-boots.jpg";
import respiratorMask from "@/assets/services/respirator-mask.jpg";
import breathingDevice from "@/assets/services/breathing-device.jpg";
import immersionSuit from "@/assets/services/immersion-suit.jpg";
import firemanHelmet from "@/assets/services/fireman-helmet.jpg";
import fireHose from "@/assets/services/fire-hose.jpg";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Colete Salva-Vidas",
      category: "maritime",
      image: lifejacket,
      description: "Coletes infláveis e de espuma certificados SOLAS/MED"
    },
    {
      id: 2,
      name: "Extintores de Incêndio",
      category: "fire",
      image: fireExtinguishers,
      description: "ABC, CO2, Espuma e Água - todos os tamanhos"
    },
    {
      id: 3,
      name: "Calçado de Segurança",
      category: "epi",
      image: safetyBoots,
      description: "Botas com biqueira de aço e compósito, antiderrapante"
    },
    {
      id: 4,
      name: "Máscaras Respiratórias",
      category: "epi",
      image: respiratorMask,
      description: "FFP1, FFP2, FFP3 - proteção respiratória certificada"
    },
    {
      id: 5,
      name: "Aparelhos Respiratórios",
      category: "maritime",
      image: breathingDevice,
      description: "EEBD e SCBA - equipamentos de emergência"
    },
    {
      id: 6,
      name: "Fato de Imersão",
      category: "maritime",
      image: immersionSuit,
      description: "Proteção térmica para sobrevivência no mar"
    },
    {
      id: 7,
      name: "Capacete de Bombeiro",
      category: "fire",
      image: firemanHelmet,
      description: "Certificado SOLAS/MED para combate a incêndio"
    },
    {
      id: 8,
      name: "Mangueiras e Hidrantes",
      category: "fire",
      image: fireHose,
      description: "Sistemas completos de combate a incêndio"
    }
  ];

  const categories = [
    { id: "all", name: "Todos" },
    { id: "maritime", name: "Segurança Marítima" },
    { id: "fire", name: "Combate a Incêndio" },
    { id: "epi", name: "EPIs" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Nossos Produtos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Equipamentos de{" "}
            <span className="text-gradient-primary">Alta Qualidade</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fornecemos equipamentos certificados das melhores marcas mundiais 
            para garantir a segurança dos nossos clientes.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <div className="glow-card gradient-card rounded-2xl overflow-hidden border border-border/60 hover:border-primary/40 transition-all duration-500 h-full hover:-translate-y-1 hover:shadow-card-hover">
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-secondary/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-md border border-border/60 text-primary font-medium">
                      Certificado
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Precisa de um produto específico? Temos um catálogo completo de equipamentos certificados.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Solicite o catálogo completo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
