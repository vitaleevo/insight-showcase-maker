import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Globe2, Package } from "lucide-react";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { icon: Award, value: "20+", label: "Anos de experiência" },
    { icon: Users, value: "150+", label: "Clientes corporativos" },
    { icon: Package, value: "500+", label: "Produtos certificados" },
    { icon: Globe2, value: "100%", label: "Capital angolano" },
  ];

  const partners = [
    "SONANGOL", "TOTAL", "CHEVRON", "BP", "ENI", "EXXON", "HALLIBURTON", "SCHLUMBERGER",
  ];

  return (
    <section ref={ref} className="relative py-20 overflow-hidden border-y border-border/40">
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card relative gradient-card border border-border/60 rounded-2xl p-6 md:p-8 text-center group hover:shadow-card-hover transition-all duration-500"
            >
              <div className="inline-flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display font-bold text-4xl md:text-5xl text-gradient-primary mb-2">
                {s.value}
              </div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Confiam na ALMAFRANS
          </p>
          <div className="relative overflow-hidden mask-fade">
            <div className="marquee">
              {[...partners, ...partners].map((name, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 font-display font-bold text-2xl md:text-3xl text-muted-foreground/40 hover:text-primary transition-colors tracking-wider"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Stats;
