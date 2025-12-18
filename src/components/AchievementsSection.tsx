const AchievementsSection = () => {
  const achievements = [
    {
      title: "NPTEL Course Topper",
      description:
        "Amongst the top 5% of learners - NPTEL Data Structures and Algorithms Course by IIT Kanpur",
      certificate: "/Nptel DSA Certificate.pdf",
    },
    {
      title: "CodeVerse VIT Bhopal",
      description: "Finalist (Top 5) out of 250+ teams at the VIT Bhopal Codeverse Hackathon.",
      certificate: "#",
    },

  ];

  return (
    <section id="achievements" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold mb-3">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <a
              key={index}
              href={achievement.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-card border border-dashed border-border rounded-2xl hover:border-secondary/50 transition-all duration-300 block text-center"
            >
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground/60 text-sm">
                {achievement.description}
              </p>
            </a>
          ))}
        </div>

        
        {/* <p className="text-center text-muted-foreground mt-12">
          Achievements will be added as the journey continues...
        </p> */}
      
      </div>
    </section>
  );
};

export default AchievementsSection;
