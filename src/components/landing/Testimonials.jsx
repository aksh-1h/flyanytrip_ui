"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya S.",
    location: "Mumbai",
    initials: "PS",
    color: "bg-pink-500",
    quote: "Planned a 10-day Japan trip in literally 4 minutes. Absolute game changer.",
  },
  {
    name: "Marcus L.",
    location: "London",
    initials: "ML",
    color: "bg-blue-500",
    quote: "The AI understood exactly what kind of trip I wanted. No other tool does this.",
  },
  {
    name: "Sara K.",
    location: "Dubai",
    initials: "SK",
    color: "bg-emerald-500",
    quote: "Finally, travel planning that doesn't feel like work.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
            Travelers love FlyAnyTrip
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-amber-50/50 border border-amber-100 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
