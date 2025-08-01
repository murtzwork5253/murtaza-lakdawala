import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient text-white relative">
      <div className="container-width section-padding text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-medium border-4 border-white/20"
          />
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-accent">Alex Johnson</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-white/90">
          Mobile App Developer
        </p>
        
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
          Flutter • Kotlin • Java
        </p>
        
        <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto">
          I build creative, user-focused mobile apps that solve real-world problems
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#projects" className="btn-primary bg-white/20 hover:bg-white/30 backdrop-blur-sm">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/30 text-white">
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;