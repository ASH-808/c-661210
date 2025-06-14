
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Codeproofs</h3>
              <p className="text-sm text-muted-foreground">
                Transforming niche industries with intelligent technology since 2017.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Products</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/products/gallopingpower" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    GallopingPower
                  </Link>
                </li>
                <li>
                  <Link to="/products/gallopinggear" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    GallopingGear
                  </Link>
                </li>
                <li>
                  <Link to="/products/tjai-erp" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    TJAI ERP
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/subsidiaries" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Subsidiaries
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    News & Media
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/manpower" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Manpower Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/investor-relations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Investor Relations
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Codeproofs Private Limited. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
