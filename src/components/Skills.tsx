
import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      gradient: "from-blue-500 to-cyan-400",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "HTML / CSS", level: 85 },
      ],
    },
    {
      icon: Wrench,
      title: "Concepts & Platforms",
      gradient: "from-orange-500 to-yellow-400",
      skills: [
        { name: "RESTful APIs", level: 90 },
        { name: "MVC Architecture", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "OOP Design", level: 90 },
      ],
    },
    {
      icon: Globe,
      title: "Frameworks & Libraries",
      gradient: "from-green-500 to-emerald-400",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Spring Boot", level: 90 },
        { name: "Hibernate", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "J2EE", level: 75 },
      ],
    },
    {
      icon: Database,
      title: "Database & Tools",
      gradient: "from-purple-500 to-indigo-400",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "JDBC", level: 85 },
        { name: "Postman", level: 80 },
        { name: "Maven", level: 75 },
        { name: "VS Code", level: 85 },
        { name: "Power BI", level: 90 },
      ],
    },
    
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies and tools I use to design, build, and deliver efficient full-stack web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 bg-background/60 backdrop-blur-md border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all rounded-2xl relative overflow-hidden group">
                {/* Glow background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${category.gradient}`}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-secondary/40 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
