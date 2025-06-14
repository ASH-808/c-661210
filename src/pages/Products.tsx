
import { motion } from "framer-motion";
import { BarChart3, ShoppingCart, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ProductCard = ({
  title,
  description,
  icon,
  features,
  benefits,
  link,
  imageUrl,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  link: string;
  imageUrl: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass rounded-xl overflow-hidden"
  >
    <div className="aspect-video relative">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 flex items-center gap-3">
        <div className="text-primary text-2xl">{icon}</div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
    <div className="p-8">
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="font-semibold mb-3 text-primary">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-primary">Benefits</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <Link to={link}>
        <Button className="w-full button-gradient">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

const Products = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container px-4 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Product <span className="text-gradient">Ecosystem</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            At Codeproofs, we've developed a complementary suite of products that address different aspects of specialized industries. From predictive analytics to e-commerce and enterprise management, our solutions work independently or as an integrated ecosystem to transform operations and outcomes.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="container px-4 py-20">
        <div className="space-y-16 max-w-6xl mx-auto">
          <ProductCard
            title="GallopingPower"
            description="AI-powered prediction engine revolutionizing horse racing analytics. Empowering enthusiasts and professionals with data-driven insights for informed decisions."
            icon={<BarChart3 />}
            features={[
              "Predictive Analytics",
              "Performance Tracking",
              "Condition Analysis",
              "Trend Identification"
            ]}
            benefits={[
              "Improved Decision Making",
              "Data-Driven Insights",
              "Competitive Advantage",
              "Real-Time Analysis"
            ]}
            link="/products/gallopingpower"
            imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
            delay={0.1}
          />
          
          <ProductCard
            title="GallopingGear"
            description="The premier e-commerce destination for professional horse racing equipment. Quality gear curated for jockeys and racing institutions."
            icon={<ShoppingCart />}
            features={[
              "Professional Racing Apparel",
              "Safety Equipment",
              "Training Accessories",
              "Stable Supplies"
            ]}
            benefits={[
              "Curated Quality Products",
              "Expert-Selected Gear",
              "Seamless Ordering",
              "Industry-Specific Focus"
            ]}
            link="/products/gallopinggear"
            imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
            delay={0.2}
          />
          
          <ProductCard
            title="TJAI ERP"
            description="Custom-built enterprise resource planning system for the Jockeys Association of India. Streamlining operations from training to race day."
            icon={<Settings />}
            features={[
              "Jockey Profile Management",
              "Race Scheduling & Logistics",
              "Training Management",
              "Regulatory Compliance"
            ]}
            benefits={[
              "Streamlined Operations",
              "Reduced Administrative Overhead",
              "Enhanced Member Support",
              "Automated Compliance"
            ]}
            link="/products/tjai-erp"
            imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
            delay={0.3}
          />
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Integrated <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            While each product excels independently, they're designed to work together as a comprehensive ecosystem. Our integrated approach ensures seamless data flow, unified user experiences, and amplified value across your entire operation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="button-gradient">
              Discuss Integration
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
