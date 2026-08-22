import {
  ExternalLink,
  Github,
  Brain,
  Code,
  Server,
  Sparkles,
} from "lucide-react";
import img2 from "../assets/House_price.jpg";
import img3 from "../assets/Rahmon.png";
import img4 from "../assets/image.png";
import img5 from "../assets/backend.png";
import img6 from "../assets/vr.png";
import img7 from "../assets/medical.png";
import { useEffect, useRef, useState } from "react";

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const aiProjects = [
    {
      title: "Movie Recommendation System",
      description:
        "A content-based movie recommender that suggests similar films using TF-IDF vectorization and Cosine Similarity — built on real-world data with Python and Scikit-learn.",
      image: img4,
      tags: [
        "Python",
        "pandas",
        "Scikit-learn",
        "TF-IDF Vectorizer",
        "Cosine Similarity",
      ],
      github: "https://github.com/zainRhmon10/movies_recommendation.git",
      demo: null,
      category: "ai",
    },
    {
      title: "Boston House Price Prediction",
      description:
        "A machine learning project built on the classic Boston Housing Dataset to predict property prices based on key features like crime rate, number of rooms, and location. Powered by XGBoost for high-accuracy regression, with a clean Streamlit web interface that lets users input custom values and get instant price predictions — bridging the gap between model and end user.",
      image: img2,
      tags: ["Python", "XGBoost", "Streamlit", "Pandas", "Scikit-learn"],
      github: "https://github.com/zainRhmon10/Home_price_prediction.git",
      demo: null,
      category: "ai",
    },
    {
      title: "Rahmon Library",
      description:
        "A pure NumPy Python library for building and training neural networks from scratch — no TensorFlow, no PyTorch. Built to deeply understand what happens inside the black box",
      image: img3,
      tags: [
        "Python",
        "NumPy",
        "Backpropagation",
        "Gradient Descent",
        "Adam",
        "SGD",
        "Mini-batch Training",
      ],
      github: "https://github.com/zainRhmon10/RahmonMini_Library.git",
      demo: null,
      category: "ai",
    },
    {
      title: "AI Medical Scribe",
      description:
        "An AI-powered medical scribe that converts doctors' voice recordings into structured SOAP reports. It combines Whisper for speech recognition, Arabic medical NLP, fine-tuned AraBERT classification, and a rule-based medical knowledge system to extract and organize clinical information.",
      image: img7,
      tags: [
        "Python",
        "Whisper",
        "AraBERT",
        "NLP",
        "Speech Recognition",
        "Machine Learning",
      ],
      github: "https://github.com/zainRhmon10/Medical-Assitant.git",
      demo: "https://zainrhmon10.github.io/Medical-Assitant/",
      category: "ai",
    },
  ];
  const graphicsProjects = [
    {
      title: "Swinging Paint Bucket Simulation",
      description:
        "A real-time GPU fluid simulation in Unity using MLS-MPM, simulating a swinging paint bucket that pours, splashes, and dries paint on a canvas. Built with XPBD rope-bucket mechanics and HLSL compute shaders.",
      image: img6,
      tags: [
        "Unity",
        "C#",
        "HLSL Compute Shaders",
        "MLS-MPM",
        "GPU Simulation",
      ],
      github: "https://github.com/NaghamMujahed/Virtual_Reality.git",
      demo: null,
      category: "graphics",
    },
  ];
  const backendProjects = [
    {
      title: "High-Performance E-Commerce Backend Engine",
      description:
        "A high-performance Spring Boot backend built to handle thousands of concurrent requests. Implements locking mechanisms to prevent race conditions, async task queues, and distributed caching. Containerized with Docker and stress-tested with Apache JMeter for 100+ concurrent users.",
      image: img5,
      tags: [
        "Spring Boot",
        "Java",
        "Docker",
        "Apache JMeter",
        "Concurrency",
        "Redis",
      ],
      github:
        "https://github.com/NaghamMujahed/High-performance-E-Commerce.git",
      demo: null,
      category: "backend",
    },
  ];

  const frontendProjects = [
    {
      title: "Restaurand Dashboard",
      description:
        "A full-featured restaurant management system with role-based access control, real-time order tracking, table & reservation management, staff scheduling, and an integrated digital wallet.",
      image:
        "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBjb2RlfGVufDF8fHx8MTc3NDY4Mzk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "MUI", "Clean Architecture"],
      github: "https://github.com/zainRhmon10/DashBoard.git",
      demo: null,
      category: "frontend",
    },
  ];
  const allProjects = [
    ...aiProjects,
    ...frontendProjects,
    ...backendProjects,
    ...graphicsProjects,
  ];

  const filtered =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeTab);

  const tabs = [
    { id: "all", label: "All Projects", color: "#00F5D4" },
    {
      id: "ai",
      label: "AI Projects",
      color: "#7B6FFF",
      icon: <Brain className="w-4 h-4 mr-2" />,
    },
    {
      id: "frontend",
      label: "Front-End",
      color: "#FF6B35",
      icon: <Code className="w-4 h-4 mr-2" />,
    },
    {
      id: "backend",
      label: "Backend",
      color: "#00C2FF",
      icon: <Server className="w-4 h-4 mr-2" />,
    },
    {
      id: "graphics",
      label: "Graphics",
      color: "#00C2FF",
      icon: <Sparkles className="w-4 h-4 mr-2" />,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center  mb-15 text-5xl font-bold">
          Featured Projects
        </h2>

        {/* Tabs */}
        {/* Tabs */}
        <div className="flex justify-start md:justify-center overflow-x-auto scrollbar-hide px-4 md:px-0">
          <div className="flex bg-bg-card p-1 rounded-3xl gap-2 md:gap-3 mb-16 min-h-10 flex-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={
                  activeTab === tab.id
                    ? {
                        backgroundColor: `${tab.color}20`,
                        color: tab.color,
                      }
                    : {}
                }
                className={`flex items-center whitespace-nowrap shrink-0 px-3 gap-1.5 md:gap-2 sm:px-4 md:px-8 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer
${activeTab === tab.id ? "" : "bg-transparent hover:opacity-80"}
`}
              >
                {tab.icon && <span className="text-xs">{tab.icon}</span>}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <Section projects={filtered} />
      </div>
    </section>
  );
}

const Section = ({ projects }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-11">
      {projects.map((project, index) => (
        <AnimatedCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
};

const AnimatedCard = ({ project, index }) => {
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
      key={project.title}
      className="bg-bg-card h-[685px]  rounded-3xl overflow-hidden border border-border hover:border-[#7B6FFF] transition-all"
    >
      <div className="relative h-55 mb-1 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full  object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-[21px] font-medium mb-4">{project.title}</h3>
        <p className="text-muted-foreground mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#7B6FFF]/10 text-[#7B6FFF] rounded text-[12px] border border-[#7B6FFF]/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="bg-bg-base  border  border-gray-700 rounded-xl px-3 py-1 text-lg hover:bg-accent-purple cursor-pointer">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-1"
            >
              <Github className="w-5 h-5" /> Code
            </a>
          </button>

          {project.demo ? (
            <button className="bg-accent-teal rounded-xl px-3 py-1.7 text-lg font-medium text-black hover:opacity-80 cursor-pointer">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row  items-center gap-1"
              >
                <ExternalLink className="w-5 h-5" /> Demo
              </a>
            </button>
          ) : (
            <button className="bg-accent-teal rounded-xl px-3 py-1.7 text-lg font-medium text-black opacity-50  ">
              <a className="flex flex-row  items-center gap-1  " disabled>
                <ExternalLink className="w-5 h-5" />
                no Demo
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
