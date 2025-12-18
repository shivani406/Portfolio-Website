import { ExternalLink, Github, Brain } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fake Job Detection",
      description:
        "Semi-supervised fake job detection system using transformer-based models, confidence-based pseudo-labeling and custom metrics to improve detection accuracy and reliability.",
      tags: ["NLP",
    "Deep Learning",
    "Transformer Models - BERT, DistilBERT",
    "Semi-Supervised Learning","Pytorch"],
      github: "https://github.com/shivani406/Fake-Job-Detection",
      demo: "",
      featured: true,
    },
    {
      title: "LLM Benchmarking Dashboard",
      description:
        "An interactive web dashboard that compares large language models in real time by measuring response latency, token usage, and throughput for the same user prompt.",
      tags: ["Streamlit","LLM APIs-Gemini and Groq","Plotly","Python"],
      github:"https://github.com/shivani406/Benchmarking-LLM-s-using-streamlit",
      demo: "https://benchmarking-llms-gemini-vs-groq.streamlit.app/",
      featured: true,
    },
    {
      title: "CrowdSafe:Real time Crowd Monitoring & Alert System (In Progress)",
      description:
        "AI-based real-time crowd monitoring system that analyzes live camera feeds to detect congestion, generate heatmaps, and send proactive safety alerts for large public gatherings.",
      tags: ["YOLO","OpenCV","Gemini Vision","FastAPI","Firebase","Vertex AI","Google Maps API"],
    
      featured: true,
    },
    
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden transition hover:-translate-y-2"
            >
            
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.featured && (
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm hover:text-primary"
                    >
                      <Github size={16} /> Code
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="flex items-center gap-2 text-sm hover:text-primary"
                      >
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
