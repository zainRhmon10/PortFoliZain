import {
  Code2,
  Brain,
  Database,
  Gauge,
  Github,
  Layers,
  Palette,
  Smartphone,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Skills() {
  const skills = [
    { name: "Python", icon: Code2, color: "#7B6FFF" },
    { name: "Machine Learning", icon: Brain, color: "#7B6FFF" },
    { name: "Deep Learning", icon: Brain, color: "#00F5D4" },
    { name: "TensorFlow", icon: Brain, color: "#00F5D4" },
    { name: "PyTorch", icon: Brain, color: "#FF6B35" },
    { name: "Streamlit", icon: Gauge, color: "#00F5D4" },
    { name: "Pandas", icon: Database, color: "#FF6B35" },
    { name: "React", icon: Layers, color: "#00F5D4" },
    { name: "Tailwind CSS", icon: Palette, color: "#7B6FFF" },
    { name: "JavaScript", icon: Code2, color: "#7B6FFF" },
    { name: "CSS", icon: Palette, color: "#00F5D4" },
    { name: "HTML", icon: Code2, color: "#FF6B35" },
    { name: "Flutter", icon: Smartphone, color: "#00F5D4" },
    { name: "UI/UX", icon: Palette, color: "#FF6B35" },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-20 text-5xl font-bold">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
      className="py-10 rounded-3xl border border-border hover:border-[#2abeab] transition-all duration-300 group hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,245,212,0.35)] cursor-pointer"
    >
      <div className="flex flex-col items-center text-center gap-7">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <skill.icon className="w-11 h-11" style={{ color: skill.color }} />
        </div>
        <h3 className="text-lg font-medium transition-colors">{skill.name}</h3>
      </div>
    </div>
  );
};
