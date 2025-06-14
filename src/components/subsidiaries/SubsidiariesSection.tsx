
import { motion } from "framer-motion";
import { GraduationCap, FlaskConical, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SubsidiaryCard = ({
  title,
  description,
  icon,
  highlights,
  link,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
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
    <div className="space-y-3 mb-8">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center gap-3">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="text-sm text-gray-300">{highlight}</span>
        </div>
      ))}
    </div>
    <Link to={link}>
      <Button variant="outline" className="w-full glass">
        Explore Programs
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </Link>
  </motion.div>
);

export const SubsidiariesSection = () => {
  return (
    <section className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Expanding Our <span className="text-gradient">Vision</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our subsidiaries complement Codeproofs' core operations, allowing us to explore new frontiers in education and innovation while maintaining our focused approach to product development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <SubsidiaryCard
          title="SkillonX"
          description="Shaping tomorrow's tech talent through specialized workshops, training programs, and skill development initiatives. Building competencies for the future."
          icon={<GraduationCap />}
          highlights={[
            "Technical Workshops",
            "Professional Certification",
            "Corporate Training",
            "Youth Innovation Programs"
          ]}
          link="/subsidiaries/skillonx"
          delay={0.1}
        />
        
        <SubsidiaryCard
          title="Webster Labs"
          description="Our innovation hub where ideas transform into prototypes. Focused on research, development, and emerging technologies that will define tomorrow."
          icon={<FlaskConical />}
          highlights={[
            "Advanced AI Applications",
            "Prototype Development",
            "Technology Forecasting",
            "Cross-Domain Innovation"
          ]}
          link="/subsidiaries/webster-labs"
          delay={0.2}
        />
      </div>
    </section>
  );
};
