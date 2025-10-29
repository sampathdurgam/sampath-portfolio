import { Card } from "@/components/ui/card";
import { Award, Star, Code, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "IBM SkillBuild Summer Internship",
      issuer: "IBM",
      period: "06/2024 – 08/2024",
      description: "Built REEFOOD platform using Java, Spring Boot, and MySQL",
      icon: Award,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      link: "https://drive.google.com/file/d/14DOddNsWi5NEopQN-BR0-_rYxPKPRKfq/view?usp=drive_link", 
    },
    {
      title: "4-Star Silver Badge in Java",
      issuer: "HackerRank",
      period: "2024",
      description: "Advanced Java programming proficiency",
      icon: Star,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      
    },
    {
      title: "SQL Fundamentals",
      issuer: "Accenture - FutureSkills Prime",
      period: "2024",
      description: "Database management and query optimization",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      link: "https://drive.google.com/file/d/1ooeWdleNA33gkP73r8SJkJL81NoMRyem/view?usp=drive_link", 
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="text-gradient">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognized achievements and professional certifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="cursor-pointer p-6 card-gradient border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl ${cert.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <cert.icon className={`h-8 w-8 ${cert.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <Badge variant="secondary" className="mb-3 text-xs">
                  {cert.issuer}
                </Badge>

                <p className="text-sm text-muted-foreground mb-3">
                  {cert.description}
                </p>

                <p className="text-xs text-primary font-medium mb-4">
                  {cert.period}
                </p>

                {/* View Certificate Button */}
                {cert.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(cert.link, "_blank")}
                    className="group-hover:bg-primary group-hover:text-white transition-all"
                  >
                    View Certificate
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
