// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

// const Projects = () => {
//   const projects = [
//     {
//       title: "CareerLinks",
//       subtitle: "Full Stack Job Portal",
//       description:
//         "Developed a full-stack job portal enabling seamless recruiter-candidate interactions with 30% faster data loading through optimized APIs and AJAX-based updates.",
//       highlights: [
//         "Integrated AI-powered chatbot using n8n for ATS resume analysis",
//         "Automated resume enhancement based on job descriptions",
//         "Improved job-match accuracy by 40%",
//       ],
//       tech: ["Spring Boot", "JDBC", "MySQL", "JavaScript", "n8n"],
//       period: "06/2025 - 07/2025",
//       gradient: "from-blue-500 to-purple-600",
//     },
//     {
//       title: "AI Concierge",
//       subtitle: "Hotel Management System",
//       description:
//         "Designed an AI-powered chatbot for hotel guest services, enhancing room booking, food ordering, and real-time customer interactions.",
//       highlights: [
//         "Natural Language Processing for human-like responses",
//         "Automated hotel operations workflow",
//         "Reduced response time and improved service availability",
//       ],
//       tech: ["Python", "Machine Learning", "NLP"],
//       period: "08/2024 - 10/2024",
//       gradient: "from-purple-500 to-pink-600",
//     },
//     {
//       title: "REEFOOD",
//       subtitle: "Food Waste Reduction Platform",
//       description:
//         "Built a comprehensive food waste reduction platform during IBM SkillBuild internship, connecting donors with recipients efficiently.",
//       highlights: [
//         "Donation management system with admin panel",
//         "Contact form integration",
//         "RESTful API testing with Postman",
//       ],
//       tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS/JS", "Maven"],
//       period: "06/2024 - 08/2024",
//       gradient: "from-green-500 to-teal-600",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Featured <span className="text-gradient">Projects</span>
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Real-world applications built with modern technologies
//             </p>
//           </div>

//           <div className="grid gap-8">
//             {projects.map((project, index) => (
//               <Card
//                 key={index}
//                 className="cursor-pointer group relative overflow-hidden card-gradient border-primary/20 hover:border-primary/40 transition-all animate-fade-in-up"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 {/* Gradient overlay */}
//                 <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />

//                 <div className="p-8">
//                   <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
//                     <div>
//                       <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
//                         {project.title}
//                       </h3>
//                       <p className="text-sm text-primary font-medium">{project.subtitle}</p>
//                     </div>
//                     <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
//                       {project.period}
//                     </span>
//                   </div>

//                   <p className="text-muted-foreground mb-6 leading-relaxed">
//                     {project.description}
//                   </p>

//                   <div className="space-y-3 mb-6">
//                     {project.highlights.map((highlight, i) => (
//                       <div key={i} className="flex items-start gap-2">
//                         <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
//                         <p className="text-sm text-muted-foreground">{highlight}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((tech, i) => (
//                       <Badge
//                         key={i}
//                         variant="secondary"
//                         className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>

//                   <div className="flex gap-3">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="group/btn"
//                       onClick={() => window.open("https://github.com/sampathdurgam", "_blank")}
//                     >
//                       <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
//                       View Code
//                     </Button>
//                     <Button
//                       size="sm"
//                       className="group/btn"
//                     >
//                       <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
//                       Live Demo
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight, Info, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeHighlights, setActiveHighlights] = useState<number | null>(null);

  const projects = [
    {
      title: "V9 Home Furnitures",
      subtitle: "Freelance Client Website",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
      description:
        "Developed a responsive furniture eCommerce website for a client, enhancing online visibility and customer engagement through modern UI and optimized performance.",
      highlights: [
        "Built using React.js and Tailwind CSS",
        "Integrated WhatsApp API for orders",
        "Dynamic product showcase",
        "SEO optimized performance",
      ],
      tech: ["Reactjs", "Tailwind CSS", "WhatsApp API"],
      gradient: "from-orange-500 to-amber-400",
      codeLink: "https://github.com/sampathdurgam/Furniture_Store",
      demoLink: "https://v9homefurniture.netlify.app/",
    },
    {
      title: "CareerLinks",
      subtitle: "Full Stack Job Portal",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      description:
        "Developed a full-stack job portal enabling seamless recruiter-candidate interactions with 30% faster data loading through optimized APIs.",
      highlights: [
        "AI-powered chatbot using n8n",
        "Automated resume enhancement",
        "Improved job-match accuracy by 40%",
        "Optimized AJAX-based updates",
      ],
      tech: ["Spring Boot", "JDBC", "MySQL", "JavaScript", "n8n"],
      period: "06/2025 - 07/2025",
      gradient: "from-purple-500 to-indigo-400",
      codeLink: "https://github.com/sampathdurgam/Job_portal-Carrerlinks",
      demoLink: "https://carrerlinks.netlify.app/",
    },
    {
      title: "AI Concierge",
      subtitle: "Hotel Management System",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
      description:
        "Designed an AI-powered chatbot for hotel guest services, enhancing room booking, food ordering, and real-time customer interactions.",
      highlights: [
        "NLP for human-like responses",
        "Automated hotel operations",
        "Reduced response time significantly",
        "24/7 service availability",
      ],
      tech: ["Python", "Machine Learning", "NLP"],
      period: "08/2024 - 10/2024",
      gradient: "from-green-500 to-emerald-400",
      codeLink: "https://github.com/sampathdurgam",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background blobs for premium look */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with precision and passion. 
              Explore my latest work across different technologies.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full flex flex-col relative overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none h-8 px-3">
                        {project.period || "Project"}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4 flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-primary/80 font-medium">{project.subtitle}</p>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-8 h-8 rounded-full hover:bg-primary/10 transition-colors"
                        onClick={() => setActiveHighlights(activeHighlights === index ? null : index)}
                      >
                        <Info className="h-4 w-4 text-primary" />
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-primary/5 text-[10px] text-primary/70 border-primary/10 hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      {project.codeLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent hover:bg-primary/5 border-primary/20 group/btn"
                          onClick={() => window.open(project.codeLink, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                          Code
                        </Button>
                      )}
                      {project.demoLink && (
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                          onClick={() => window.open(project.demoLink, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Info Overlay (Animated) */}
                  <AnimatePresence>
                    {activeHighlights === index && (
                      <motion.div 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="absolute inset-x-0 bottom-0 h-[70%] bg-card border-t border-primary/20 p-6 z-20 flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-sm font-bold flex items-center tracking-tight">
                            Key Highlights <ChevronRight className="ml-1 h-3 w-3 text-primary" />
                          </h4>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-7 w-7 rounded-full hover:bg-primary/10 transition-colors"
                            onClick={() => setActiveHighlights(null)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <ul className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                          {project.highlights.map((highlight, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed"
                            >
                              <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                        <div className="mt-auto pt-4 border-t border-primary/5">
                          <p className="text-[10px] text-primary/60 font-medium truncate">
                            {project.tech.join(" • ")}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Optional: View More Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground italic">
              More exciting projects are in the works!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

