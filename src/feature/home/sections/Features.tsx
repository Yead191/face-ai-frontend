import { Zap, Camera, TrendingUp, Sparkles, Lock, Users } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: "/assets/icons/home/features/icon.svg",
    title: "Advanced AI Analysis",
    description:
      "Our AI analyzes your face across multiple criteria for precise and personalized scoring.",
    color: "from-[#9810FA] to-[#8200DB]",
    iconColor: "text-purple-300",
  },
  {
    icon: "/assets/icons/home/features/icon2.svg",
    title: "Instant Scanning",
    description:
      "Upload a photo and receive your complete analysis within seconds.",
    color: "from-[#E60076] to-[#C6005C]",
    iconColor: "text-magenta-300",
  },
  {
    icon: "/assets/icons/home/features/icon3.svg",
    title: "Progress Tracking",
    description:
      "Monitor your improvements over time with detailed graphs and comparisons.",
    color: "from-[#4F39F6] to-[#432DD7]",
    iconColor: "text-blue-300",
  },
  {
    icon: "/assets/icons/home/features/icon4.svg",
    title: "Custom Routines",
    description:
      "Get personalized exercises and routines to naturally enhance your features.",
    color: "from-[#7F22FE] to-[#7008E7]",
    iconColor: "text-purple-300",
  },
  {
    icon: "/assets/icons/home/features/icon5.svg",
    title: "Privacy Guaranteed",
    description:
      "Your data is encrypted and secure. Full GDPR compliance for peace of mind.",
    color: "from-[#C800DE] to-[#A800B7]",
    iconColor: "text-magenta-300",
  },
  {
    icon: "/assets/icons/home/features/icon6.svg",
    title: "Active Community",
    description:
      "Join thousands of users improving their appearance every day.",
    color: "from-[#9810FA] to-[#E60076]",
    iconColor: "text-pink-300",
  },
];

export default function Features() {
  return (
    <section id="features" className="container py-16 lg:py-20 ">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="section-title text-balance">Powerful Features</h2>
        <p className="section-subtitle text-balance">
          Discover how our AI technology helps you achieve your goals
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features?.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group relative bg-[#0C0C0D] backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 boxShadow"
            >
              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Image
                  className={`w-6 h-6 ${feature.iconColor}`}
                  width={24}
                  height={24}
                  src={Icon}
                  alt="icon"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
