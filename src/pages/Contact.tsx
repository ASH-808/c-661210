
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OfficeCard = ({
  country,
  flag,
  city,
  type,
  address,
  phone,
  email,
  delay = 0,
}: {
  country: string;
  flag: string;
  city: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass rounded-xl p-6"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl">{flag}</span>
      <div>
        <h3 className="font-bold text-lg">{country}</h3>
        <p className="text-primary text-sm">{type} — {city}</p>
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
        <p className="text-sm text-muted-foreground">{address}</p>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="w-4 h-4 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">{phone}</p>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="w-4 h-4 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
    </div>
  </motion.div>
);

const Contact = () => {
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
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Reach out to discuss products, partnerships, or opportunities. Whether you're looking to collaborate, invest, or explore opportunities with us—we're just a message away.
          </p>
          <p className="text-muted-foreground">
            We're active across India and Southeast Asia, with dedicated teams ready to support you wherever you are.
          </p>
        </motion.div>
      </section>

      {/* Offices Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="text-gradient">Offices</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <OfficeCard
            country="India"
            flag="🇮🇳"
            city="Bangalore"
            type="Head Office"
            address="Codeproofs Private Limited, Bangalore, Karnataka, India"
            phone="+91-XXXXXXXXXX"
            email="info@codeproofs.com"
            delay={0.1}
          />
          
          <OfficeCard
            country="India"
            flag="🇮🇳"
            city="Mysore"
            type="Development Center"
            address="Mysore, Karnataka, India"
            phone="+91-XXXXXXXXXX"
            email="mysore@codeproofs.com"
            delay={0.2}
          />
          
          <OfficeCard
            country="Malaysia"
            flag="🇲🇾"
            city="Kuala Lumpur"
            type="Regional Office"
            address="Kuala Lumpur, Malaysia"
            phone="+60-XXXXXXXX"
            email="malaysia@codeproofs.com"
            delay={0.3}
          />
          
          <OfficeCard
            country="Indonesia"
            flag="🇮🇩"
            city="Jakarta"
            type="Operations Hub"
            address="Jakarta, Indonesia"
            phone="+62-XXXXXXXX"
            email="indonesia@codeproofs.com"
            delay={0.4}
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get in <span className="text-gradient">Touch</span></h2>
              <p className="text-muted-foreground">
                Have questions about our products, partnerships, or services? Send us a message and we'll get back to you.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input placeholder="Your full name" className="bg-black/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-black/20" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input placeholder="Your company name" className="bg-black/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="What's this about?" className="bg-black/20" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea 
                  placeholder="Tell us about your project, questions, or how we can help..."
                  rows={6}
                  className="bg-black/20"
                />
              </div>

              <Button type="submit" size="lg" className="w-full button-gradient">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Departmental Contacts */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Departmental <span className="text-gradient">Contacts</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { department: "General Inquiries", email: "hello@codeproofs.com" },
            { department: "Investor Relations", email: "investors@codeproofs.com" },
            { department: "Careers", email: "careers@codeproofs.com" },
            { department: "Manpower Solutions", email: "staffing@codeproofs.com" },
            { department: "Workshops & Education", email: "training@skillonx.com" },
            { department: "Media & Press", email: "media@codeproofs.com" }
          ].map((contact, index) => (
            <motion.div
              key={contact.department}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 text-center"
            >
              <Building className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{contact.department}</h3>
              <a href={`mailto:${contact.email}`} className="text-sm text-primary hover:underline">
                {contact.email}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
