import React from 'react';
import { Gamepad2, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: MessageCircle,
      href: 'https://wa.me/923364518167',
      label: 'WhatsApp'
    },
    {
      icon: Mail,
      href: 'mailto:deepcutoriginals@gmail.com',
      label: 'Email'
    },
    {
      icon: MapPin,
      href: 'https://maps.app.goo.gl/eANRvQ3ukSj1HhMv6',
      label: 'Location'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/deepcut-originals/',
      label: 'LinkedIn'
    }
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Work', href: '#games' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Join Us', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <span className="font-inter font-bold text-2xl text-foreground">
                DeepCut Originals
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Crafting original worlds built on creativity, not imitation. We build complete, fully functional games from programming to final polish.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-6 text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-6 text-lg">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:deepcutoriginals@gmail.com" 
                className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                deepcutoriginals@gmail.com
              </a>
              <a 
                href="https://wa.me/923364518167" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                03364518167
              </a>
              <a 
                href="https://maps.app.goo.gl/eANRvQ3ukSj1HhMv6" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Lahore, Pakistan
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((social, index) => {
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              >
                {React.createElement(social.icon, { className: "h-5 w-5" })}
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DeepCut Originals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
