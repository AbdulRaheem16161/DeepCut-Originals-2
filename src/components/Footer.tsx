import React from 'react';
import { Gamepad2, Github, Linkedin, Youtube, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: MessageCircle,
      href: 'https://wa.me/qr/MMPUR4R6XWLOD1',
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
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@DeepCutOriginals',
      label: 'YouTube'
    }
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Gamepad2 className="h-7 w-7 text-primary" />
            <span className="font-inter font-bold text-xl text-foreground">
              DeepCut Originals
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-6">
          <nav className="flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social, index) => {
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10"
              >
                {React.createElement(social.icon, { className: "h-5 w-5" })}
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2024 DeepCut Originals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
