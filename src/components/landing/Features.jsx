"use client";

import { Plane, Building, Map, MessageSquare, Users, WifiOff } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Plane className="w-6 h-6 text-primary" />,
    title: "Smart Flight Search",
    description: "Compare thousands of flights in real time. AI picks the best deals for your dates.",
  },
  {
    icon: <Building className="w-6 h-6 text-primary" />,
    title: "Hotel Recommendations",
    description: "Curated stays matched to your budget, style, and trip vibe.",
  },
  {
    icon: <Map className="w-6 h-6 text-primary" />,
    title: "AI Itinerary Builder",
    description: "Day-by-day plans generated in seconds based on your preferences.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "Chat-Based Planning",
    description: "Just describe your trip in plain English. Our AI understands and plans.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Group Travel Mode",
    description: "Invite friends. Everyone votes on destinations. FlyAnyTrip balances preferences.",
  },
  {
    icon: <WifiOff className="w-6 h-6 text-primary" />,
    title: "Offline Access",
    description: "Download your itinerary. Navigate without internet.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to travel smarter
          </h2>
          <p className="text-lg text-slate-600">
            From planning to booking — FlyAnyTrip does it all.
          </p>
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
              className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6">
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
