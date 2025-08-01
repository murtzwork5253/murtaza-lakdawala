const About = () => {
  return (
    <section id="about" className="bg-surface section-padding">
      <div className="container-width">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              Passionate about building cross-platform mobile apps with{" "}
              <span className="text-primary font-semibold">Flutter</span>,{" "}
              <span className="text-primary font-semibold">Kotlin</span>, and{" "}
              <span className="text-primary font-semibold">Java</span>.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              I love creating intuitive user experiences and always learning new technologies 
              to solve real-world problems through innovative mobile solutions.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring the latest mobile development 
              trends, contributing to open-source projects, or mentoring aspiring developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;