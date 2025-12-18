import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Achievements",
    href: "#achievements"
  }, {
    name: "Resume",
    href: "#resume"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium">
                {link.name}
              </a>)}
          </div>

          {/* Email */}
          <a className="hidden md:block text-sm text-muted-foreground hover:text-primary transition-colors" href="mailto:shivaniparate602@gmail.com">shivaniparate602@gmail.com</a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                {link.name}
              </a>)}
          </div>
        </div>}
    </nav>;
};
export default Navbar;