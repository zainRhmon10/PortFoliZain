import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
// import { Button } from "./ui/button";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certif" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <nav
        className={`max-w-[1500px] mx-auto px-4 transition-all duration-300 ${
          scrolled ? "py-5" : "py-8"
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-4xl bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent"
          >
            ZR
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-15 ">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300  hover:text-white transition-colors text-xl relative group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6 " />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground relative group  py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            {/* <Button className="w-full">Let's Talk</Button> */}
          </div>
        )}
      </nav>
    </header>
  );
}
export default NavBar;
