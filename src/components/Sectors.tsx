import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { sectorData } from "@/data/sectors";
import { useRef } from "react";
import { Anchor, Flame, HardHat, Building2 } from "lucide-react";

const Sectors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectorIcons: Record<string, { icon: React.ElementType; gradient: string }> = {
    "industria-e-mineracao": { icon: HardHat, gradient: "from-orange-500/10 to-transparent" },
    "petroleo-e-gas": { icon: Flame, gradient: "from-red-500/10 to-transparent" },
    "maritimo": { icon: Anchor, gradient: "from-blue-500/10 to-transparent" },
    "portuario": { icon: Building2, gradient: "from-cyan-500/10 to-transparent" },
  };

  const sectors = sectorData.map(sector => ({
    ...sector,
    icon: sectorIcons[sector.id]?.icon || Building2,
    gradient: sectorIcons[sector.id]?.gradient || "from-primary/10 to-transparent"
  }));

  return (
    <section id="sectors" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-primary/5" />
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
              <Link to={`/sector/${sector.id}`} className="block h-full">
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
