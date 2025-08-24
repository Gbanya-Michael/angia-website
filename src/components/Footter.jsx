import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function FooterSection() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 text-sm">
                  <img src="/angia-logo.png" alt="Logo" />
                </span>
              </div>
              <div>
                <div>ANGIA</div>
                <div className="text-xs text-slate-400">The MVP Guys</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Australia's leading MVP development studio. From idea to market in
              just 6 weeks.
            </p>
            <div variant="secondary" className="bg-slate-800 text-slate-300">
              🇦🇺 Proudly Australian
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Web App Development</li>
              <li>Mobile App Development</li>
              <li>E-Commerce Solutions</li>
              <li>AI-Powered Workflows</li>
              <li>MVP Consulting</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/about"> About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog"> Blog</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@angia.com.au</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+61 2 8123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sydney, Australia</span>
              </div>
              <div className="flex space-x-3 pt-2">
                <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
          <p>
            &copy; 2025 Angia. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
}
