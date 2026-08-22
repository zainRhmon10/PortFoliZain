import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  Send,
  MessageCircle,
} from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/zayn-rahmon-10c",
      href: "https://linkedin.com/in/zayn-rahmon-10c",
      color: "#00F5D4",
      description: "Let's connect",
    },

    {
      icon: Send,
      label: "Telegram",
      value: "t.me/Zain_RH10",
      href: "https://t.me/Zain_RH10",
      color: "#7B6FFF",
      description: "Let's talk",
    },
    {
      icon: Mail,
      label: "Email",
      value: "zynrhmwn74@gmail.com",
      href: "mailto:zynrhmwn74@gmail.com",
      color: "#FF6B35",
      description: "Send me an email",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      {/* <div className="absolute top-20 left-10 w-96 h-96 bg-[#00F5D4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#7B6FFF]/5 rounded-full blur-3xl"></div> */}

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-1 bg-card border border-[#00F5D4]/30 rounded-full mb-4">
            <MessageCircle className="w-3 h-3 text-[#00F5D4]" />
            <span className="text-md text-[#00F5D4]">Get In Touch</span>
          </div>
          <h2 className="mb-4">
            <span className="bg-gradient-to-r  text-4xl from-[#00F5D4] via-[#7B6FFF] to-[#FF6B35] bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's work
            together to bring your ideas to life.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={
                method.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Glow Effect */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"
                style={{
                  background: `linear-gradient(135deg, ${method.color}40, transparent)`,
                }}
              ></div>

              <div className="relative  rounded-2xl border border-border group-hover:border-transparent transition-all duration-300  p-5 h-full">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{
                      background: `linear-gradient(135deg, ${method.color}20, ${method.color}05)`,
                      border: `1px solid ${method.color}30`,
                    }}
                  >
                    <method.icon
                      className="w-9 h-9"
                      style={{ color: method.color }}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg mb-1  transition-colors">
                    {method.label}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground mb-3">
                    {method.description}
                  </p>

                  {/* Value */}
                  <p className="text-lg" style={{ color: method.color }}>
                    {method.value}
                  </p>
                </div>

                {/* Hover Arrow Indicator */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send className="w-4 h-4" style={{ color: method.color }} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border pt-11 pb-0 text-center text-muted-foreground">
        <p>&copy; 2026 Zain Rahmoun. All rights reserved.</p>
      </div>
    </section>
  );
}
