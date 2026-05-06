
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Adab Digital",
      period: "Jan 2026 – May 2026",
      role: "Web Developer",
      location: "Hyderabad",
      highlights: [
        "Engineered and deployed responsive web solutions for 4 major live projects: PG Sealing, Cyma Systems, ABJA Power, and VPR Mining.",
        "Architected enterprise-grade user interfaces using React.js and Webflow, incorporating custom-coded components for enhanced functionality and SEO performance.",
        "Collaborated closely with cross-functional teams and stakeholders to translate business requirements into intuitive UI/UX improvements and high-fidelity frontend updates.",
      ],
      gradient: "from-blue-600 to-indigo-500",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Background blobs for visual depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A showcase of my professional journey and the impact I've made in digital product development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/5">
                {/* Decoration Sidebar */}
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${exp.gradient}`} />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Briefcase size={18} className="text-primary" />
                      <span className="tracking-wide uppercase text-sm">{exp.role}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-3 text-sm">
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl border border-primary/10 font-bold whitespace-nowrap shadow-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2 text-muted-foreground font-medium pl-1 md:pl-0">
                      <MapPin size={14} className="text-primary" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-5">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="mt-1 flex-shrink-0">
                        <div className="p-1 rounded-full bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shadow-sm">
                          <CheckCircle2 size={14} />
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-[15px]">
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Interactive hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white`}>
                    <Briefcase size={14} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
