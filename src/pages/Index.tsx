
import { motion } from "framer-motion";
import { ArrowRight, Command, BarChart3, ShoppingCart, Settings, GraduationCap, FlaskConical, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ShinyText from "@/components/ui/shiny-text";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div className="absolute inset-0 -z-10 bg-[#0A0A0A]" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            Pioneering AI-driven solutions since 2017
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-200 block"
            >
              <ShinyText text="Transforming Niche Industries" speed={3} />
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white font-medium block"
            >
              <TextGenerateEffect words="with Intelligent Technology" />
            </motion.span>
          </h1>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            At Codeproofs, we build technology that matters. Founded in 2017, we've grown from a visionary startup to a global innovator with offices across India and Southeast Asia.{" "}
            <span className="text-white">Our specialized products serve unique markets with AI-powered precision.</span>
          </motion.p>
          
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient">
              Explore Our Ecosystem
            </Button>
            <Button size="lg" variant="link" className="text-white">
              Discover Our Story <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
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

      {/* About Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container px-4 py-20 bg-black"
      >
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building Technology That <span className="text-gradient">Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our specialized products serve unique markets with AI-powered precision, while our subsidiaries expand our reach into education and research frontiers. With a global presence spanning India and Southeast Asia, we're transforming industries one solution at a time.
          </p>
          <Button size="lg" variant="outline" className="glass">
            Discover Our Story
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container px-4 py-24 bg-black"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions That Drive <span className="text-gradient">Industries Forward</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our specialized products leverage AI and advanced analytics to transform how professionals work across unique market segments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <motion.div variants={fadeInLeft} className="glass rounded-xl p-8 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-primary text-3xl"><BarChart3 /></div>
              <h3 className="text-2xl font-bold">GallopingPower</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">AI-powered prediction engine revolutionizing horse racing analytics. Empowering enthusiasts and professionals with data-driven insights for informed decisions.</p>
            <ul className="space-y-2 mb-8">
              <li className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Predictive Analytics
              </li>
              <li className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Performance Tracking
              </li>
              <li className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Condition Analysis
              </li>
            </ul>
            <Button className="w-full button-gradient">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="glass rounded-xl p-8 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-primary text-3xl"><ShoppingCart /></div>
              <h3 className="text-2xl font-bold">GallopingGear</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">The premier e-commerce destination for professional horse racing equipment. Quality gear curated for jockeys and racing institutions.</p>
            <ul className="space-y-2 mb-8">
              <li className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Professional Racing Apparel
              </li>
              <li className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Safety Equipment
              </li>
              <li className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Training Accessories
              </li>
            </ul>
            <Button className="w-full button-gradient">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          
          <motion.div variants={fadeInRight} className="glass rounded-xl p-8 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-primary text-3xl"><Settings /></div>
              <h3 className="text-2xl font-bold">TJAI ERP</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">Custom-built enterprise resource planning system for the Jockeys Association of India. Streamlining operations from training to race day.</p>
            <ul className="space-y-2 mb-8">
              <li className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Jockey Profile Management
              </li>
              <li className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Race Scheduling & Logistics
              </li>
              <li className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Training Management
              </li>
            </ul>
            <Button className="w-full button-gradient">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Subsidiaries Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container px-4 py-24 bg-black"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expanding Our <span className="text-gradient">Vision</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our subsidiaries complement Codeproofs' core operations, allowing us to explore new frontiers in education and innovation while maintaining our focused approach to product development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div variants={fadeInLeft} className="glass rounded-xl p-8 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-primary text-3xl"><GraduationCap /></div>
              <h3 className="text-2xl font-bold">SkillonX</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">Shaping tomorrow's tech talent through specialized workshops, training programs, and skill development initiatives. Building competencies for the future.</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm text-gray-300">Technical Workshops</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm text-gray-300">Professional Certification</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm text-gray-300">Corporate Training</span>
              </div>
            </div>
            <Button variant="outline" className="w-full glass">
              Explore Programs <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          
          <motion.div variants={fadeInRight} className="glass rounded-xl p-8 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-primary text-3xl"><FlaskConical /></div>
              <h3 className="text-2xl font-bold">Webster Labs</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">Our innovation hub where ideas transform into prototypes. Focused on research, development, and emerging technologies that will define tomorrow.</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm text-gray-300">Advanced AI Applications</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm text-gray-300">Prototype Development</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm text-gray-300">Technology Forecasting</span>
              </div>
            </div>
            <Button variant="outline" className="w-full glass">
              Discover Innovations <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Global Presence */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container px-4 py-20 bg-black"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Globally Connected, <span className="text-gradient">Locally Focused</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From our headquarters in Bangalore to our regional offices across Southeast Asia, we're building technology that transcends borders while addressing local needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div variants={fadeInLeft} className="glass rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🇮🇳 India</h3>
            <p className="text-muted-foreground">Headquarters in Bangalore, Development Center in Mysore</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="glass rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🇲🇾 Malaysia</h3>
            <p className="text-muted-foreground">Regional Office in Kuala Lumpur</p>
          </motion.div>
          <motion.div variants={fadeInRight} className="glass rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🇮🇩 Indonesia</h3>
            <p className="text-muted-foreground">Operations Hub in Jakarta</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black"
      >
        <TestimonialsSection />
      </motion.div>

      {/* Contact Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container px-4 py-20 bg-black"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Reach out to discuss products, partnerships, or opportunities. We're active across India and Southeast Asia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div variants={fadeInLeft} className="glass rounded-xl p-6">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">Get in touch for any inquiries</p>
            <p className="text-primary">hello@codeproofs.com</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="glass rounded-xl p-6">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-4">Speak with our team directly</p>
            <p className="text-primary">+91-XXXXXXXXXX</p>
          </motion.div>
          
          <motion.div variants={fadeInRight} className="glass rounded-xl p-6">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-muted-foreground mb-4">Our headquarters in India</p>
            <p className="text-primary">Bangalore, India</p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-20 relative bg-black"
      >
        <div className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our technologies can address your unique challenges and drive innovation in your sector.
          </p>
          <Button size="lg" className="button-gradient">
            Start the Conversation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black"
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
