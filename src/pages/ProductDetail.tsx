import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, ShieldCheck, Tag, Info, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!product && id) {
      navigate("/404");
    }
  }, [product, id, navigate]);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Breadcrumb & Back Button */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link 
              to="/#products" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para Produtos
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-border shadow-2xl aspect-square"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Certificação Internacional
                </span>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  {product.category === 'maritime' ? 'Segurança Marítima' : product.category === 'fire' ? 'Combate a Incêndio' : 'EPIs'}
                </span>
                <div className="w-2 h-2 rounded-full bg-primary/30" />
                <span className="text-muted-foreground text-sm flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  Referência: AF-{product.id.substring(0, 4).toUpperCase()}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {product.name}
              </h1>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                {/* Specifications */}
                <div>
                  <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Especificações
                  </h3>
                  <ul className="space-y-3">
                    {product.specifications.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Principais Vantagens
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary/60 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-xl text-lg h-auto shadow-button"
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
                  Solicitar Cotação
                </Button>
                <Link to="/#products">
                  <Button variant="outline" size="lg" className="px-8 py-6 rounded-xl text-lg h-auto border-primary/20 hover:bg-primary/5 text-primary">
                    Ver Catálogo Completo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
