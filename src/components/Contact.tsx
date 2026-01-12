import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Escritório Sede",
      details: ["Belas Business Park", "Edifício Cunene 301", "Luanda, Angola"]
    },
    {
      icon: Phone,
      title: "Telefones",
      details: ["(+244) 928 867 132", "(+244) 923 276 552"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@almafrans.com"]
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sexta", "08:00 - 17:00"]
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
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
            Contacte-nos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Vamos Trabalhar{" "}
            <span className="text-gradient-primary">Juntos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contacto connosco para saber mais sobre os nossos serviços 
            ou para solicitar um orçamento personalizado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="gradient-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-2 text-foreground">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="gradient-card rounded-2xl p-8 border border-border">
              <h4 className="font-display font-bold text-xl mb-4 text-foreground">Certificações</h4>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">ISO</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ISO 9001</p>
                    <p className="text-xs text-muted-foreground">Certificado</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">ANAB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ANAB</p>
                    <p className="text-xs text-muted-foreground">Acreditado</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="gradient-card rounded-2xl p-8 md:p-10 border border-border">
              <h3 className="font-display font-bold text-2xl mb-6 text-foreground">
                Envie-nos uma Mensagem
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo
                    </label>
                    <Input
                      placeholder="Seu nome"
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input
                      placeholder="Nome da empresa"
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input
                      placeholder="+244 XXX XXX XXX"
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Serviço de Interesse
                  </label>
                  <select className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Selecione um serviço</option>
                    <option value="maritime">Segurança Marítima</option>
                    <option value="fire">Combate a Incêndio</option>
                    <option value="epi">Fornecimento de EPI's</option>
                    <option value="cylinders">Manutenção de Cilindros</option>
                    <option value="gases">Gases Medicinais/Industriais</option>
                    <option value="warehouse">Gestão de Armazém</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Descreva o que precisa..."
                    rows={4}
                    className="bg-muted border-border focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-button group">
                  Enviar Mensagem
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
