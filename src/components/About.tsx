import { MapPin, GraduationCap, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/image.jpg";
const downloadResume = () => {
  window.open(
    "https://drive.google.com/file/d/1Mit-9FARHDBx3grpqGlz5fS_B4VekD35/view?usp=drive_link",
    "_blank"
  );
};

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "St. Martin's Engineering College, Hyderabad",
      period: "2021 - 2025",
      score: "GPA: 8.25",
    },
    {
      degree: "Intermediate Education",
      institution: "Narayana Junior College, Hyderabad",
      period: "2019 - 2021",
      score: "GPA: 88.4%",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate developer creating innovative solutions through
            technology.
          </p>
        </div>

        {/* Image + Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <img
                src={profileImage}
                alt="Durgam Sampath"
                className="rounded-2xl w-80 h-80 object-cover border border-primary/20 shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
              />
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-glow-pulse shadow-lg">
                <GraduationCap size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="p-8 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a dedicated{" "}
                <span className="text-primary font-semibold">
                  Full Stack Java Developer{" "}
                </span>
                 with experience in building scalable, efficient web
                applications. My skills span frontend and backend development
                with a strong foundation in{" "}
                <span className="font-semibold text-primary">
                  Spring Boot, Hibernate, and MySQL
                </span>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy solving real-world challenges through clean code, modern
                UI design, and optimized performance. My goal is to deliver
                maintainable, high-quality software that creates real impact.
              </p>
            </Card>

            {/* Location Button */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-primary/10 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Hyderabad, India
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-sm text-green-400 font-medium">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <Card className="p-8 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gradient">
              <GraduationCap className="h-7 w-7 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <h4 className="font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-primary mt-1">{edu.period}</p>
                  <p className="text-xs text-accent font-semibold mt-1 text-white">
                    {edu.score}
                  </p>
                </div>
              ))}
            </div>
          </Card>
          {/* Resume Button */}
          <div className="flex justify-center sm:justify-start mt-5">
            <button
              onClick={downloadResume}
              className="group relative flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto min-w-[200px] rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <Download
                size={18}
                className="mr-1 group-hover:translate-y-[2px] transition-transform"
              />
              Download 
              {/* Glow Effect */}
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-30 blur-md transition-opacity"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
