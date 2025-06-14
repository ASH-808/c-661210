
import { motion } from "framer-motion";
import { BarChart3, ShoppingCart, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductCard = ({
  title,
  description,
  icon,
  features,
  link,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  link: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass rounded-xl p-8 h-full flex flex-col"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="text-primary text-3xl">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
    <ul className="space-y-2 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
          {feature}
        </li>
      ))}
    </ul>
    <Link to={link}>
      <Button className="w-full button-gradient">
        Learn More
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </Link>
  </motion.div>
);

export const ProductsSection = () => {
  return (
    <section className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Solutions That Drive <span className="text-gradient">Industries Forward</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our specialized products leverage AI and advanced analytics to transform how professionals work across unique market segments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
          link="/products/gallopingpower"
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
          link="/products/gallopinggear"
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
          link="/products/tjai-erp"
          delay={0.3}
        />
      </div>
    </section>
  );
};
