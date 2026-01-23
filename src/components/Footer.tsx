import React from 'react';
import { Gamepad2, Palette, Box, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import logoImage from '@/assets/logo-new.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'Our Work',
    href: '#games'
  }, {
    label: 'Services',
    href: '#services'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Team',
    href: '#team'
  }, {
    label: 'Join Us',
    href: '#about'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
          {/* Left: Brand Section */}
          

          {/* Center: Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-6 text-lg">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {navLinks.map((link, index) => <a key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium" onClick={e => handleNavClick(e, link.href)}>
                  {link.label}
                </a>)}
            </nav>
          </div>

          {/* Right: Contact Info */}
          
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://wa.me/923364518167" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 rounded-full bg-whatsapp/10 hover:bg-whatsapp/20 flex items-center justify-center text-whatsapp icon-hover transition-all duration-300 border border-whatsapp/20">
            <MessageCircle className="h-6 w-6" />
          </a>
          <a href="mailto:deepcutoriginals@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary icon-hover transition-all duration-300 border border-primary/20">
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://maps.app.goo.gl/eANRvQ3ukSj1HhMv6" target="_blank" rel="noopener noreferrer" aria-label="Location" className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary icon-hover transition-all duration-300 border border-primary/20">
            <MapPin className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/company/deepcut-originals/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary icon-hover transition-all duration-300 border border-primary/20">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {currentYear} <span className="text-foreground font-medium">DeepCut</span> <span className="text-primary font-medium">Originals</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;