import { Code2, Smartphone, Database, Globe, Zap, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Languages",
      skills: ["Dart", "Kotlin", "Java", "JavaScript", "TypeScript"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Frameworks",
      skills: ["Flutter", "Android SDK", "React Native"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Database",
      skills: ["Firebase", "REST APIs", "SQLite", "Room Database"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Development Tools",
      skills: ["Android Studio", "VS Code", "Git", "Figma"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Architecture",
      skills: ["MVVM", "Clean Architecture", "Provider", "Bloc"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX",
      skills: ["Material Design", "Custom Animations", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="bg-background section-padding">
      <div className="container-width">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-soft card-hover">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 text-primary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;