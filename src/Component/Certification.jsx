import {
  Award,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Trophy,
  Star,
} from "lucide-react";

export function Certifications() {
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

  return (
    <section id="certif" className="py-20 px-5  relative overflow-hidden">
      {/* Background Decoration */}
      {/* <div className="absolute top-20 right-10 w-72 h-72 bg-[#00F5D4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#7B6FFF]/5 rounded-full blur-3xl"></div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-20 text-6xl font-bold">
            Certifications & Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {certifications.map((cert, index) => (
            <div key={cert.title} className="relative group ">
              {/* Glow Effect */}
              <div
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur"
                style={{
                  background: `linear-gradient(135deg, ${cert.color}40, transparent)`,
                }}
              ></div>

              <div className="relative bg-card rounded-xl border border-border group-hover:border-transparent transition-all duration-300 overflow-hidden h-full">
                {/* Top Bar with Color */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: cert.color }}
                ></div>

                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{
                          background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}05)`,
                          border: `1px solid ${cert.color}30`,
                        }}
                      >
                        <Award
                          className="w-7 h-7"
                          style={{ color: cert.color }}
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg mb-2 transition-colors leading-tight">
                          {cert.title}
                        </h3>
                        <p
                          className="text-sm mb-1"
                          style={{ color: cert.color }}
                        >
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Verified Badge */}
                    {cert.verified && (
                      <div
                        className="flex items-center gap-1 px-2 py-1 rounded-full text-xs"
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

                  {/* Date and Category */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
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

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-lg bg-[#0D0D0F] text-muted-foreground border border-border hover:border-[#00F5D4]/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <button className="bg-bg-base w-full border    border-gray-700 rounded-lg  text-xl hover:bg-accent-purple cursor-pointer">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3  justify-center items-center"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Certificate
                    </a>
                  </button>
                </div>

                {/* Featured Star */}
                {cert.featured && (
                  <div className="absolute top-4 right-4">
                    <Star className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F5D4]/10 via-[#7B6FFF]/10 to-[#FF6B35]/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-card border border-border rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00F5D4]/20 to-[#7B6FFF]/20 mb-4">
              <Trophy className="w-8 h-8 text-[#00F5D4]" />
            </div>
            <h3 className="text-2xl mb-3">
              <span className="bg-gradient-to-r from-[#00F5D4] to-[#7B6FFF] bg-clip-text text-transparent">
                Continuous Learning Journey
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              ملتزم بالتعلم المستمر ومواكبة أحدث التطورات في مجال الذكاء الصنعي والتكنولوجيا.
              دائماً في سعي لاكتساب مهارات جديدة وتطوير الخبرات.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="gap-2 bg-gradient-to-r from-[#00F5D4] to-[#7B6FFF] hover:opacity-90">
                <ExternalLink className="w-4 h-4" />
                View All Credentials
              </Button>
              <Button variant="outline" className="gap-2">
                <Award className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
