import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Fornecer soluções de segurança de alta qualidade, garantindo a proteção e eficiência operacional dos nossos clientes."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser a empresa de referência em Angola no fornecimento de equipamentos e serviços de segurança industrial e marítima."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Excelência, integridade, compromisso com o cliente e responsabilidade social são os pilares da nossa actuação."
    }
  ];

  const highlights = [
    "Empresa de direito 100% angolano",
    "Mais de 5 anos de experiência",
    "Certificação ISO 9001",
    "Rede de relações comerciais sólidas",
    "Produtos de alta qualidade",
    "Preços competitivos"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={aboutImage}
                  alt="Profissional ALMAFRANS"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 gradient-primary p-6 rounded-2xl shadow-button"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="font-display font-bold text-4xl text-primary-foreground">5+</p>
                <p className="text-primary-foreground/80 text-sm">Anos de Experiência</p>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Sobre Nós
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Construindo Relações de{" "}
              <span className="text-gradient-primary">Confiança</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              <strong className="text-foreground">Almafrans – Comércio e Prestação de Serviço Lda</strong>, 
              somos uma empresa de direito 100% angolano, exercendo a actividade de 
              comércio e prestação de serviços.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Pela experiência que granjeamos ao longo dos anos, construímos uma rede 
              de relações comerciais fortes e estreitas, oferecendo aos clientes serviços 
              rápidos e confiáveis, produtos de alta qualidade e preços sempre razoáveis.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="glow-card gradient-card rounded-2xl p-8 border border-border/60 hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1 hover:shadow-card-hover relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
