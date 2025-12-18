import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
const HeroSection = () => {
  return <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-1/4 floating">
        <div className="w-16 h-16 rounded-full border-2 border-secondary opacity-60" />
      </div>
      <div className="absolute top-32 right-1/5 floating-delayed">
        <div className="w-8 h-8 rounded-full bg-secondary opacity-80" />
      </div>
      <div className="absolute bottom-40 left-20 floating-delayed">
        <div className="w-4 h-4 rounded-full bg-primary opacity-50" />
      </div>


      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">Hi,</span>
                <br />
                <span className="text-foreground">I am </span>
                <span className="text-primary">Shivani Parate</span>
              </h1>
              
            </div>

            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">Driven by curiosity, I enjoy exploring how technology can be applied to solve real-world problems. My current focus includes Data Analysis, Machine Learning, and backend development with Flask and FastAPI. I am also actively building a strong foundation in Data Structures and Algorithms through regular practice and problem-solving.</p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold hover-glow transition-all duration-300 group" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Let's Connect
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:border-primary text-foreground hover:text-primary px-8 py-6 text-lg font-semibold transition-all duration-300" onClick={() => document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Content - Photo & Info */}
          <div className="relative animate-fade-in-up-delay-1">
            {/* Profile Image Placeholder */}
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full bg-card border border-border flex items-center justify-center overflow-hidden">
                  <img
                      src="/images/profile.jpg"
                      alt="Shivani Parate"
                      className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover mx-auto"
                    />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;