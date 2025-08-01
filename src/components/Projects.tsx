import { ExternalLink, Github } from "lucide-react";
import expenseTrackerImage from "@/assets/expense-tracker.jpg";
import chatAppImage from "@/assets/chat-app.jpg";
import taskManagerImage from "@/assets/task-manager.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Expense Tracker App",
      description: "A comprehensive expense tracking app that helps users manage their finances with intuitive category filtering and detailed analytics.",
      image: expenseTrackerImage,
      technologies: ["Flutter", "Firebase", "Dart"],
      features: [
        "Add/edit/delete expenses",
        "Category-based filtering",
        "Interactive charts and analytics",
        "Cloud synchronization",
        "Export to PDF"
      ],
      githubUrl: "https://github.com/alexjohnson/expense-tracker",
      demoUrl: "https://expense-tracker-demo.netlify.app"
    },
    {
      id: 2,
      title: "Real-time Chat App",
      description: "A modern messaging application with real-time communication, file sharing, and group chat functionality.",
      image: chatAppImage,
      technologies: ["Kotlin", "Firebase", "Room Database"],
      features: [
        "Real-time messaging",
        "Group chat support",
        "File and image sharing",
        "Push notifications",
        "Offline message sync"
      ],
      githubUrl: "https://github.com/alexjohnson/chat-app",
      demoUrl: null
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A productivity app that helps teams and individuals organize tasks, set priorities, and track progress effectively.",
      image: taskManagerImage,
      technologies: ["Java", "SQLite", "Material Design"],
      features: [
        "Task creation and assignment",
        "Priority levels and deadlines",
        "Progress tracking",
        "Team collaboration",
        "Custom categories"
      ],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      demoUrl: "https://task-manager-demo.netlify.app"
    }
  ];

  return (
    <section id="projects" className="bg-surface section-padding">
      <div className="container-width">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Image */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-card-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 justify-center text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;