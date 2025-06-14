
import { motion } from "framer-motion";
import { Building, Target, Lightbulb, Users, Globe, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
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
            Our Journey of <span className="text-gradient">Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Founded in 2017 by visionaries Leelavathy Yogappa and Moomal Chouhan, Codeproofs Private Limited began with a simple yet powerful idea: create technology that solves real problems in underserved markets.
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  From Vision to <span className="text-gradient">Global Reality</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Registered under the Registrar of Companies (ROC) Bangalore, we've grown from a small team with big aspirations to a global company with operations spanning India and Southeast Asia.
                </p>
                <p className="text-muted-foreground">
                  Our journey is defined by continuous innovation, strategic expansion, and a relentless focus on building products that matter. With each milestone, we've remained true to our founding principles while embracing new possibilities.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop"
                  alt="Codeproofs Office"
                  className="rounded-xl glass"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground">
              To be a global catalyst for intelligent product innovation—delivering domain-specific solutions that are efficient, predictive, and scalable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground">
              To develop high-impact technology products that solve real-world problems, empower professionals, and inspire the next wave of innovation—backed by global presence, cross-domain expertise, and a strong network of strategic subsidiaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values & Culture */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Drives Us <span className="text-gradient">Forward</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Lightbulb className="w-6 h-6" />,
              title: "Innovation",
              description: "We constantly seek new ways to solve complex problems."
            },
            {
              icon: <Building className="w-6 h-6" />,
              title: "Integrity",
              description: "We believe in transparent relationships with clients, partners, and employees."
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: "Excellence",
              description: "We strive for the highest quality in everything we build."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Collaboration",
              description: "We work across borders and disciplines to create integrated solutions."
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Global Perspective",
              description: "Our international presence informs our understanding of diverse markets."
            },
            {
              icon: <Calendar className="w-6 h-6" />,
              title: "Purpose",
              description: "We focus on technology that creates meaningful impact."
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">{value.icon}</div>
                <h3 className="font-semibold text-lg">{value.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            The <span className="text-gradient">Codeproofs Way</span>
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              We believe in building technology that addresses specific industry needs with precision and foresight. Our approach combines deep domain knowledge, cutting-edge AI capabilities, and a fundamental understanding of the markets we serve.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">Product Focus</h4>
                <p className="text-sm">We don't just build software; we create comprehensive solutions designed for longevity and impact.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">AI-Driven Innovation</h4>
                <p className="text-sm">Machine learning and predictive analytics form the backbone of our technological approach.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">Global Perspective</h4>
                <p className="text-sm">Our international presence informs our understanding of diverse markets and needs.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
