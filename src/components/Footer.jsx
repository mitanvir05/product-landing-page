import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: "Virtual Agent", href: "https://va.skylandweb.com" },
      { name: "Matrimonial", href: "https://matrimonial.skylandweb.com" },
      { name: "PDF Converter", href: "https://convert.skylandweb.com" },
      { name: "Workplace Timer", href: "https://workplace-timer.skylandweb.com" },
    ]
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-8 pb-4 overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-6">
          
          {/* Column 1: Brand & Contact */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Skyland Products</h2>
              <p className="mt-3 text-slate-400 max-w-sm leading-relaxed">
                Design-first productization studio building tools that help businesses scale, automate, and succeed.
              </p>
            </div>
            
            <div className="space-y-3">
              <a href="mailto:info@skylandweb.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail size={16} />
                </div>
                <span>info@skylandweb.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                 <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <span>+1 (347) 815-1556</span>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Skyland Web. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>by Skyland Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}