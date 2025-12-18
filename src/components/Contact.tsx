import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon."
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'deepcutoriginals@gmail.com',
      description: "Send us an email and we'll respond within 24 hours.",
      link: 'mailto:deepcutoriginals@gmail.com'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      info: '03364518167',
      description: 'Available Monday to Friday, 9 AM to 6 PM PST.',
      link: 'https://wa.me/qr/MMPUR4R6XWLOD1'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Mansorah Multan Road, Lahore, Pakistan',
      description: 'Located in the heart of Lahore.',
      link: 'https://maps.app.goo.gl/eANRvQ3ukSj1HhMv6'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6 text-foreground">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your gaming vision to life? We'd love to hear from you.
            Whether you have a project in mind or just want to say hello, drop us a line!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card
                    key={index}
                    className="card-gaming group cursor-pointer hover:border-primary/30 transition-all duration-200 hover:shadow-sm"
                    onClick={() => window.open(contact.link, '_blank')}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-all duration-200">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-inter font-semibold mb-1 group-hover:text-primary transition-colors duration-200">
                          {contact.title}
                        </h4>
                        <p className="text-primary font-medium mb-2">
                          {contact.info}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Click to {contact.title.toLowerCase()}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
