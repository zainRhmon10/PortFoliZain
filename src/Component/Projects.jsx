import { ExternalLink, Github } from "lucide-react";
import img2 from "../assets/House_price.jpg";
import img3 from "../assets/Rahmon.png";
import img4 from "../assets/image.png";

export function Projects() {
  const projects = [
    {
      title: "Restaurand Dashboard",
      description:
        "A full-featured restaurant management system with role-based access control, real-time order tracking, table & reservation management, staff scheduling, and an integrated digital wallet.",
      image:
        "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBjb2RlfGVufDF8fHx8MTc3NDY4Mzk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "MUI", "Clean Architecture"],
      github: "https://github.com/zainRhmon10/DashBoard.git",
      demo: "https://example.com",
    },
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
      demo: "https://example.com",
    },
    {
      title: "Boston House Price Prediction",
      description:
        "A machine learning project built on the classic Boston Housing Dataset to predict property prices based on key features like crime rate, number of rooms, and location. Powered by XGBoost for high-accuracy regression, with a clean Streamlit web interface that lets users input custom values and get instant price predictions — bridging the gap between model and end user.",
      image: img2,
      tags: ["Python", "XGBoost", "Streamlit", "Pandas", "Scikit-learn"],
      github: "https://github.com/zainRhmon10/Home_price_prediction.git",
      demo: "https://example.com",
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
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 ">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-center  mb-20 text-6xl font-bold">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-bg-card h-[710px]  rounded-3xl overflow-hidden border border-border hover:border-[#7B6FFF] transition-all"
            >
              <div className="relative h-60 mb-3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full  object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#7B6FFF]/10 text-[#7B6FFF] rounded text-md border border-[#7B6FFF]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="bg-bg-base  border  border-gray-700 rounded-2xl px-4 py-2 text-xl hover:bg-accent-purple cursor-pointer">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center gap-2"
                    >
                      <Github className="w-6 h-6" /> Code
                    </a>
                  </button>
                  <button className="bg-accent-teal rounded-2xl px-4 py-2 text-xl font-medium text-black hover:opacity-80 cursor-pointer">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center gap-2"
                    >
                      <ExternalLink className="w-6 h-6" /> Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
