import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { serviceData } from "@/data/services";
import { Link } from "react-router-dom";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  // Service data is now in src/data/services.ts
  const serviceCategories = serviceData;

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Gama Completa de{" "}
            <span className="text-gradient-primary">Serviços Especializados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A ALMAFRANS dispõe de uma vasta gama de serviços de segurança náutica, 
            offshore, combate contra incêndio e muito mais.
          </p>
        </motion.div>

        {/* Services Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Categories List */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="gradient-card rounded-2xl border border-border p-2 sticky top-32">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                    activeCategory === index
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10 text-foreground"
                  }`}
                  onClick={() => setActiveCategory(index)}
                >
                  <div>
                    <h4 className="font-display font-semibold">{category.title}</h4>
                    <p className={`text-sm ${activeCategory === index ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {category.subtitle}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeCategory === index ? "rotate-90" : "group-hover:translate-x-1"}`} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Service Details */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="gradient-card rounded-2xl border border-border p-8 md:p-12 h-full">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-button flex-shrink-0">
                    <span className="text-primary-foreground font-display font-bold text-2xl">
                      {String(activeCategory + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {serviceCategories[activeCategory].title}
                    </h3>
                    <p className="text-primary text-lg">
                      {serviceCategories[activeCategory].subtitle}
                    </p>
                  </div>
                  <Link 
                    to={`/service/${serviceCategories[activeCategory].id}`}
                    className="ml-auto flex items-center gap-2 text-primary font-bold hover:underline"
                  >
                    Ver detalhes completos
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {serviceCategories[activeCategory].services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-foreground">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
