import { Download, FileText } from "lucide-react";
import { Button } from "./ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-8">
            <FileText className="text-primary" size={36} />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get My Resume
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Download my resume to learn more about my education, skills, and projects in detail.
          </p>

          {/* Download Link */}
          <a
            href="/Shivani_Parate_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold transition-all duration-300 group"
            >
              <Download
                className="mr-3 group-hover:translate-y-1 transition-transform"
                size={22}
              />
              Download Resume
            </Button>
          </a>

          {/* Note */}
          <p className="text-muted-foreground/60 text-sm mt-6">
            Last Updated - December 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
