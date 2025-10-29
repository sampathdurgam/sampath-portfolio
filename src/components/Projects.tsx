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




import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "V9 Home Furnitures",
      subtitle: "Freelance Client Website",
      description:
        "Developed a responsive furniture eCommerce website for a client, enhancing online visibility and customer engagement through modern UI and optimized performance.",
      highlights: [
        "Built using React.js and Tailwind CSS for fast and responsive layouts",
        "Integrated “Order on WhatsApp” feature for direct customer purchases",
        "Designed dynamic product showcase with categories and offers",
        "Implemented SEO optimization and smooth navigation for better user experience",
      ],
      tech: ["Reactjs", "Tailwind CSS", "WhatsApp API"],
      gradient: "from-orange-500 to-orange-200",
      codeLink: "https://github.com/sampathdurgam/Furniture_Store", 
      demoLink: "https://v9homefurniture.netlify.app/", 
    },
    {
      title: "CareerLinks",
      subtitle: "Full Stack Job Portal",
      description:
        "Developed a full-stack job portal enabling seamless recruiter-candidate interactions with 30% faster data loading through optimized APIs and AJAX-based updates.",
      highlights: [
        "Integrated AI-powered chatbot using n8n for ATS resume analysis",
        "Automated resume enhancement based on job descriptions",
        "Improved job-match accuracy by 40%",
      ],
      tech: ["Spring Boot", "JDBC", "MySQL", "JavaScript", "n8n"],
      period: "06/2025 - 07/2025",
      gradient: "from-purple-500 to-purple-200",
      codeLink: "https://github.com/sampathdurgam/Job_portal-Carrerlinks", 
      demoLink: "https://carrerlinks.netlify.app/", 
    },
    {
      title: "AI Concierge",
      subtitle: "Hotel Management System",
      description:
        "Designed an AI-powered chatbot for hotel guest services, enhancing room booking, food ordering, and real-time customer interactions.",
      highlights: [
        "Natural Language Processing for human-like responses",
        "Automated hotel operations workflow",
        "Reduced response time and improved service availability",
      ],
      tech: ["Python", "Machine Learning", "NLP"],
      period: "08/2024 - 10/2024",
      gradient: "from-green-500 to-green-200",
      codeLink: "https://github.com/sampathdurgam",
      // demoLink: "https://aiconcierge-demo.vercel.app",
    },
    {
      title: "REEFOOD",
      subtitle: "Food Waste Reduction Platform",
      description:
        "Built a comprehensive food waste reduction platform during IBM SkillBuild internship, connecting donors with recipients efficiently.",
      highlights: [
        "Donation management system with admin panel",
        "Contact form integration",
        "RESTful API testing with Postman",
      ],
      tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS/JS", "Maven"],
      period: "06/2024 - 08/2024",
      gradient: "from-yellow-500 to-green-200",
      codeLink: "https://github.com/sampathdurgam/IBM-Internship",
      demoLink: "https://reefood-demo.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world applications built with modern technologies
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="cursor-pointer group relative overflow-hidden card-gradient border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient top border */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}
                />

                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                      {project.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
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
                        className="group/btn"
                        onClick={() =>
                          window.open(project.codeLink, "_blank")
                        }
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        View Code
                      </Button>
                    )}
                    {project.demoLink && (
                      <Button
                        size="sm"
                        className="group/btn"
                        onClick={() =>
                          window.open(project.demoLink, "_blank")
                        }
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
