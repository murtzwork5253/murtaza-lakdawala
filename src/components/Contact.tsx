import { useState } from "react";
import { Mail, Linkedin, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-background section-padding">
      <div className="container-width">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="mailto:alex.johnson@email.com"
                className="flex items-center p-4 bg-card rounded-lg shadow-soft card-hover"
              >
                <Mail className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold text-card-foreground">Email</p>
                  <p className="text-muted-foreground">alex.johnson@email.com</p>
                </div>
              </a>
              
              <a
                href="https://linkedin.com/in/alexjohnson-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-card rounded-lg shadow-soft card-hover"
              >
                <Linkedin className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold text-card-foreground">LinkedIn</p>
                  <p className="text-muted-foreground">Connect with me</p>
                </div>
              </a>
            </div>
            
            {/* Resume Download */}
            <div className="text-center lg:text-left">
              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-card-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-card-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-card-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;