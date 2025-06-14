
import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { ProductsSection } from "@/components/products/ProductsSection";
import { SubsidiariesSection } from "@/components/subsidiaries/SubsidiariesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            Pioneering AI-driven solutions since 2017
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Transforming Niche Industries" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="with Intelligent Technology" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            At Codeproofs, we build technology that matters. Founded in 2017, we've grown from a visionary startup to a global innovator with offices across India and Southeast Asia.{" "}
            <span className="text-white">Our specialized products serve unique markets with AI-powered precision.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Link to="/products">
              <Button size="lg" className="button-gradient">
                Explore Our Ecosystem
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="link" className="text-white">
                Discover Our Story <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop"
              alt="Codeproofs Technology Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* About Section Brief */}
      <section className="container px-4 py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building Technology That <span className="text-gradient">Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our specialized products serve unique markets with AI-powered precision, while our subsidiaries expand our reach into education and research frontiers. With a global presence spanning India and Southeast Asia, we're transforming industries one solution at a time.
          </p>
          <Link to="/about">
            <Button size="lg" variant="outline" className="glass">
              Discover Our Story
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <div id="products" className="bg-black">
        <ProductsSection />
      </div>

      {/* Subsidiaries Section */}
      <div className="bg-black">
        <SubsidiariesSection />
      </div>

      {/* Global Presence */}
      <section className="container px-4 py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Globally Connected, <span className="text-gradient">Locally Focused</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From our headquarters in Bangalore to our regional offices across Southeast Asia, we're building technology that transcends borders while addressing local needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🇮🇳 India</h3>
            <p className="text-muted-foreground">Headquarters in Bangalore, Development Center in Mysore</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🇲🇾 Malaysia</h3>
            <p className="text-muted-foreground">Regional Office in Kuala Lumpur</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🇮🇩 Indonesia</h3>
            <p className="text-muted-foreground">Operations Hub in Jakarta</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our technologies can address your unique challenges and drive innovation in your sector.
          </p>
          <Link to="/contact">
            <Button size="lg" className="button-gradient">
              Start the Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
