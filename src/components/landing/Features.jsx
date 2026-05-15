"use client";

import { Plane, Building, Map, MessageSquare, Users, WifiOff } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Plane className="w-7 h-7 text-white" />,
    title: "Smart Flight Search",
    description: "Compare thousands of flights in real time. AI picks the best deals for your dates.",
    gradient: "from-orange-400 to-pink-500 shadow-orange-500/20"
  },
  {
    icon: <Building className="w-7 h-7 text-white" />,
    title: "Hotel Recommendations",
    description: "Curated stays matched to your budget, style, and trip vibe.",
    gradient: "from-blue-400 to-indigo-500 shadow-blue-500/20"
  },
  {
    icon: <Map className="w-7 h-7 text-white" />,
    title: "AI Itinerary Builder",
    description: "Day-by-day plans generated in seconds based on your preferences.",
    gradient: "from-emerald-400 to-teal-500 shadow-emerald-500/20"
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-white" />,
    title: "Chat-Based Planning",
    description: "Just describe your trip in plain English. Our AI understands and plans.",
    gradient: "from-purple-400 to-fuchsia-500 shadow-purple-500/20"
  },
  {
    icon: <Users className="w-7 h-7 text-white" />,
    title: "Group Travel Mode",
    description: "Invite friends. Everyone votes on destinations. FlyAnyTrip balances preferences.",
    gradient: "from-yellow-400 to-orange-500 shadow-yellow-500/20"
  },
  {
    icon: <WifiOff className="w-7 h-7 text-white" />,
    title: "Offline Access",
    description: "Download your itinerary. Navigate without internet.",
    gradient: "from-rose-400 to-red-500 shadow-rose-500/20"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Everything you need to plan to <br />
            <span className="font-script text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 block mt-2">travel faster</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            From planning to booking — FlyAnyTrip does it all.
          </p>
          <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center gap-2 shadow-sm">
            ✨ Try AI-Powered Travel Planning
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#F8FAFC] border border-transparent rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-tr ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
