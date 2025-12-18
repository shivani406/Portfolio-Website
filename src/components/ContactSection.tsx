import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const ContactSection = () => {
  const socials = [
    {
      icon: Github,
      name: "GitHub",
      handle: "@shivani406",
      url: "https://github.com/shivani406",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "Shivani Parate",
      url: "https://www.linkedin.com/in/shivaniparate30/",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: Code2,
      name: "LeetCode",
      handle: "@shivaniparate",
      url: "https://leetcode.com/u/shivani_parate602/",
      color: "hover:text-[#FFA116]",
    }
   
  ];

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 px-6 py-4 bg-card border border-border rounded-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 ${social.color}`}
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <social.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{social.name}</p>
                <p className="text-sm text-muted-foreground">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Shivani Parate. Built with passion and code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
