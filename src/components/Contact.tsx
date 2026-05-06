import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=durgamsampath2003@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );

    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Medak, Telangana",
      color: "text-red-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "durgamsampath2003@gmail.com",
      link: "mailto:durgamsampath2003@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sampath-durgam",
      link: "https://linkedin.com/in/sampath-durgam-5b4327259",
      color: "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sampathdurgam",
      link: "https://github.com/sampathdurgam",
      color: "text-purple-500",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can contribute to your team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 card-gradient border-primary/20 animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>

                {/* <Button type="submit" className="w-full group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button> */}
                <Button
                  onClick={() => {
                    const subject = encodeURIComponent(
                      `Portfolio Contact from ${formData.name}`
                    );
                    const body = encodeURIComponent(
                      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                    );

                    if (window.navigator.userAgent.includes("Mobile")) {
                      // mobile – open mail app
                      window.location.href = `mailto:durgamsampath2003@gmail.com?subject=${subject}&body=${body}`;
                    } else {
                      // desktop – open Gmail
                      window.open(
                        `https://mail.google.com/mail/?view=cm&fs=1&to=durgamsampath2003@gmail.com&su=${subject}&body=${body}`,
                        "_blank"
                      );
                    }
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Card className="p-8 card-gradient border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-all group"
                    >
                      <div
                        className={`p-2 rounded-lg bg-secondary group-hover:scale-110 transition-transform`}
                      >
                        <info.icon className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 card-gradient border-primary/20">
                <h3 className="text-xl font-bold mb-4">Available For</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                    <span className="text-sm">Full-time opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                    <span className="text-sm">Freelance projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                    <span className="text-sm">Collaboration</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
