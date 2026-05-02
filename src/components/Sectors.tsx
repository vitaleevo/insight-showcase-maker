import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Anchor, Flame, HardHat, Wrench, Trash2, ShoppingCart } from "lucide-react";

const Sectors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectors = [
    {
      icon: Anchor,
      title: "Segurança Marítima",
      description: "Equipamentos e serviços especializados para segurança em ambientes marítimos e offshore.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Flame,
      title: "Segurança Contra Incêndio",
      description: "Sistemas completos de prevenção, detecção e combate a incêndios industriais e comerciais.",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: HardHat,
      title: "Fornecimento de EPI's",
      description: "Equipamentos de Proteção Individual de alta qualidade para todas as indústrias.",
      gradient: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: Wrench,
      title: "Manutenção de Cilindros",
      description: "Serviços técnicos especializados em manutenção e recarga de cilindros de gás.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Trash2,
      title: "Limpeza de Tanque Industrial",
      description: "Serviços profissionais de limpeza e manutenção de tanques industriais.",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      icon: ShoppingCart,
      title: "Procurement",
      description: "Gestão de compras e fornecimento de materiais e equipamentos industriais.",
      gradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <section id="sectors" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Sectores de Actuação
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Soluções Completas para{" "}
            <span className="text-gradient-primary">Diversos Sectores</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Actuamos nos sectores marítimo, petrolífero e público, diferenciando-nos no mercado 
            pela qualidade e excelência em todos os nossos serviços.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="glow-card relative gradient-card rounded-2xl p-8 border border-border/60 hover:border-primary/40 transition-all duration-500 h-full overflow-hidden hover:shadow-card-hover hover:-translate-y-1">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.08, rotate: -4 }}
                  >
                    <sector.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  <h3 className="font-display font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {sector.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {sector.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-sm font-medium">Saiba mais</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
