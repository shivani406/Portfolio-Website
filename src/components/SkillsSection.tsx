import { Brain, BarChart3, Code2, Trophy } from "lucide-react";
const SkillsSection = () => {
  const skills = [{
    icon: Brain,
    name: "AI & ML",
    description: " Agentic AI, LangChain, RAG, LLM API’s, Deep Learning, Pytorch, Scikit-Learn, YOLO, OpenCV, Hugging Face ",
    color: "primary" as const
  }, {
    icon: BarChart3,
    name: "Data Analytics",
    description: "EDA, Data Visualization, Statistical Analysis, MySQL, MongoDB, ChromaDB, Firebase",
    color: "secondary" as const
  }, {
    icon: Code2,
    name: "Backend Development",
    description: "Flask, FastAPI, REST APIs, Python, Streamlit",
    color: "primary" as const
  }, {
    icon: Trophy,
    name: "DSA & Competitive Programming",
    description: "LeetCode, Problem Solving, Algorithms",
    color: "secondary" as const
  }];
  return <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold mb-3">My Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => <div key={index} className="group relative p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden">
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color === 'primary' ? 'from-primary/5' : 'from-secondary/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative flex items-start gap-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${skill.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className={skill.color === 'primary' ? 'text-primary' : 'text-secondary'} size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Tech Tags */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
  {[
     "Python",
     "C++",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Data Analytics",
    "Flask",
    "FastAPI",
    "MySQL",
    "Git and GitHub",
    "Data Structures & Algorithms",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "PyTorch",
    "GCP",
    "Streamlit",
    "Firebase",
    "OpenCV",
    "YOLO",
  ].map((tech, index) => (
    <span
      key={index}
      className="px-4 py-2 text-sm bg-muted border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 transition"
    >
      {tech}
    </span>
  ))}
</div>
      </div>
    </section>;
};
export default SkillsSection;