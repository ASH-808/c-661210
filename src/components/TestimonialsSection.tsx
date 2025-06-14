
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Racing Analytics Director",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "GallopingPower has revolutionized how we approach race analysis. The AI-driven insights have significantly improved our prediction accuracy and strategic planning."
  },
  {
    name: "Priya Sharma",
    role: "Jockey Association Administrator",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "TJAI ERP has streamlined our entire operation. What used to take hours of manual work is now automated, allowing us to focus on what truly matters - supporting our jockeys."
  },
  {
    name: "Michael Thompson",
    role: "Racing Equipment Supplier",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "GallopingGear has transformed our distribution network. The platform's specialized focus on racing equipment has connected us with customers we never could have reached before."
  },
  {
    name: "Dr. Sarah Chen",
    role: "Technology Research Lead",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Webster Labs' innovative approach to R&D has been instrumental in advancing our industry's technological capabilities. Their collaborative model is truly exceptional."
  },
  {
    name: "Arjun Patel",
    role: "Corporate Training Manager",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "SkillonX's training programs have upskilled our entire development team. The practical, hands-on approach perfectly bridges the gap between theory and real-world application."
  },
  {
    name: "Lisa Wong",
    role: "Regional Operations Head",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Codeproofs' manpower solutions have been invaluable for our expansion across Southeast Asia. Their understanding of both technology and local markets is unmatched."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by <span className="text-gradient">Industry Leaders</span></h2>
          <p className="text-muted-foreground text-lg">
            See how Codeproofs is transforming industries across India and Southeast Asia
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
