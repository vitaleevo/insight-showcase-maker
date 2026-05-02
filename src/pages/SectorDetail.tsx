import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { sectorData } from "@/data/sectors";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const SectorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sector = sectorData.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sector && id) {
      navigate("/404");
    }
  }, [sector, id, navigate]);

  if (!sector) return null;

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
              to="/#sectors" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para Sectores
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
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                {sector.title}
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
                {sector.fullDescription}
              </p>
            </motion.div>

            <div className="gradient-card rounded-3xl border border-border p-12 text-center">
              <h3 className="font-display font-bold text-2xl mb-6">
                Precisa de soluções específicas para este sector?
              </h3>
              <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                A nossa equipa técnica está preparada para desenhar planos de segurança e fornecer equipamentos 
                adaptados às necessidades críticas do sector de {sector.title.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#contact');
                    }
                  }}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </Button>
                <Link to="/#products">
                  <Button variant="outline" size="lg" className="rounded-xl px-8 w-full sm:w-auto">
                    Ver Catálogo de Produtos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SectorDetail;
