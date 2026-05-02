import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { serviceData } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, MessageSquare, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service && id) {
      navigate("/404");
    }
  }, [service, id, navigate]);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link 
              to="/#services" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para Serviços
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex w-20 h-20 rounded-3xl bg-primary/10 items-center justify-center mb-6">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                {service.title}
              </h1>
              <p className="text-primary text-xl font-medium mb-8">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                {service.fullDescription}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="gradient-card rounded-3xl border border-border p-8"
              >
                <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  Âmbito do Serviço
                </h3>
                <ul className="space-y-4">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/40">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                  <h4 className="font-display font-bold text-xl mb-4 text-primary">Porquê a ALMAFRANS?</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    Somos especialistas certificados com anos de experiência no mercado angolano. 
                    Garantimos rapidez, conformidade legal e a máxima segurança em todos os processos.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2">• Técnicos Certificados</li>
                    <li className="flex items-center gap-2">• Peças Originais</li>
                    <li className="flex items-center gap-2">• Emissão de Certificados Oficiais</li>
                  </ul>
                </div>

                <div className="text-center p-8 bg-secondary/20 rounded-3xl border border-border/60">
                  <h4 className="font-display font-bold text-xl mb-4">Pronto para começar?</h4>
                  <Button 
                    size="lg" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 h-auto shadow-button"
                    asChild
                  >
                    <a href="https://wa.me/244928867132" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Solicitar Orçamento
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
