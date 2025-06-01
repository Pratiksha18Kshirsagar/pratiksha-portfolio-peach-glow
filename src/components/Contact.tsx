
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out, I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/Pratiksha18Kshirsagar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-peach-light p-3 rounded-full hover:bg-peach transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pratiksha-kshirsagar-9751ab252/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-peach-light p-3 rounded-full hover:bg-peach transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:kshirsagarpratiksha1820@gmail.com" 
                className="bg-peach-light p-3 rounded-full hover:bg-peach transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <div>
              <p className="mb-2 flex items-center">
                <Mail size={16} className="mr-2" /> kshirsagarpratiksha1820@gmail.com
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-peach hover:bg-peach-dark text-foreground"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
