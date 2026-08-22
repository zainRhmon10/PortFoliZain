import {
  Award,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CertCard = ({ cert, index }) => {
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
      className="relative group"
    >
      {/* Glow Effect */}
      <div
        className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur"
        style={{
          background: `linear-gradient(135deg, ${cert.color}40, transparent)`,
        }}
      />

      <div className="relative bg-bg-card rounded-xl border border-border group-hover:border-transparent transition-all duration-300 overflow-hidden h-full">
        <div className="h-1.5 w-full" style={{ backgroundColor: cert.color }} />

        <div className="p-5 md:p-7">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3 flex-1">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{
                  background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}05)`,
                  border: `1px solid ${cert.color}30`,
                }}
              >
                <Award className="w-6 h-6" style={{ color: cert.color }} />
              </div>
              <div className="flex-1">
                <h3 className="text-md font-medium mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm mb-1" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
              </div>
            </div>
            {cert.verified && (
              <div
                className="flex items-center gap-1 px-1 py-1 rounded-full text-xs"
                style={{
                  backgroundColor: `${cert.color}15`,
                  color: cert.color,
                }}
              >
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              <span>{cert.date}</span>
            </div>
            <div
              className="px-3 py-1 rounded-full text-xs"
              style={{
                backgroundColor: `${cert.color}10`,
                color: cert.color,
                border: `1px solid ${cert.color}20`,
              }}
            >
              {cert.category}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs rounded-lg bg-[#0D0D0F] text-muted-foreground border border-border hover:border-[#00F5D4]/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          <button className="bg-bg-base w-full border border-gray-700 rounded-lg text-lg hover:bg-accent-purple cursor-pointer">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 py-0.5 justify-center items-center"
            >
              <ExternalLink className="w-4 h-4" />
              View Certificate
            </a>
          </button>
        </div>

        {cert.featured && (
          <div className="absolute top-4 right-4">
            <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
          </div>
        )}
      </div>
    </div>
  );
};

export function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      title: "Structuring Machine Learning Projects",
      issuer: "DeepLearning.AI",
      date: "2026",
      category: "Deep Learning",
      color: "#00F5D4",
      skills: [
        "Dev/test set",
        "Avoidable Bias & variance",
        "Transfer learning",
        "End to End DL",
      ],
      link: "https://coursera.org/share/bc33a3667bb336b9be92adfe6a8a8c57",
      verified: true,
      featured: true,
    },
    {
      title:
        "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      issuer: "DeepLearning.AI",
      date: "2026",
      category: "Deep Learning",
      color: "#7B6FFF",
      skills: [
        "Regularization",
        "Normalization",
        "Gradient check",
        "Optomizer Algorithm",
      ],
      link: "https://www.coursera.org/account/accomplishments/verify/WNMEOMG258GU",
      verified: true,
      featured: true,
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "2026",
      category: "Deep Learning",
      color: "#FF6B35",
      skills: [
        "structured Data",
        "Loss Function",
        "Chain Rule",
        "Random Initw",
      ],
      link: "https://www.coursera.org/account/accomplishments/verify/I2L212QF183I",
      verified: true,
      featured: false,
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI",
      date: "2026",
      category: "Machine Learning",
      color: "#00F5D4",
      skills: [
        "Unsupervised Learning",
        "Recommender systems",
        "Reinforcement learning",
      ],
      link: "https://www.coursera.org/account/accomplishments/records/BP3AK6F5JE34",
      verified: true,
      featured: false,
    },
    {
      title: "Advanced learning Algorithm",
      issuer: "DeepLearning.AI",
      date: "2026",
      category: "Machine Learning",
      color: "#7B6FFF",
      skills: ["Activation Function", "Build Neural networks With tensorflow"],
      link: "https://www.coursera.org/account/accomplishments/records/5O84NPIZ8N4A",
      verified: true,
      featured: false,
    },
    {
      title: "React Basic",
      issuer: "Meta",
      date: "2025",
      category: "FrontEnd",
      color: "#FF6B35",
      skills: ["Navigation", "React Router", "Props"],
      link: "https://www.coursera.org/account/accomplishments/verify/KFL6WZJV3XOR",
      verified: true,
      featured: false,
    },
    {
      title: "React Advance",
      issuer: "Meta",
      date: "2025",
      category: "FrontEnd",
      color: "#00F5D4",
      skills: ["Hooks", "Copmponent Composition", "React testing"],
      link: "https://www.coursera.org/account/accomplishments/records/HH4179P8E72D",
      verified: true,
      featured: false,
    },
    {
      title: "Tailwind",
      issuer: "Scrimba",
      date: "2025",
      category: "FrontEnd",
      color: "#7B6FFF",
      skills: [
        "Responsive Design",
        "States & interactive",
        "Component patterns",
      ],
      link: "https://www.coursera.org/account/accomplishments/records/NZGFT3LPI2ZL",
      verified: true,
      featured: false,
    },
  ];

  const INITIAL_COUNT = 6;
  const displayed = showAll
    ? certifications
    : certifications.slice(0, INITIAL_COUNT);

  return (
    <section id="certif" className="py-20 px-5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-20 text-[42px] font-bold">
            Certifications & Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayed.map((cert, index) => (
            <CertCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>

        {/* Show More / Show Less */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-350 hover:border-accent-teal text-gray-350 hover:text-accent-teal transition-all duration-300 cursor-pointer"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" /> Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" /> Show More (
                {certifications.length - INITIAL_COUNT} more)
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
