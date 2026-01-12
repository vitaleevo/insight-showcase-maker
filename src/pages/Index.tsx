import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sectors from "@/components/Sectors";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Sectors />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
