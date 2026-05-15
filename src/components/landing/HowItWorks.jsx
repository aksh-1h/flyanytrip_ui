"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell us your vibe",
    description: "City break? Beach escape? Adventure trek? Just describe what you're looking for.",
  },
  {
    number: "02",
    title: "AI builds your trip",
    description: "FlyAnyTrip generates a full itinerary with flights, hotels, and daily plans.",
  },
  {
    number: "03",
    title: "Book and go",
    description: "Confirm bookings in one click. Everything in one place, ready to travel.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
            From idea to itinerary in 3 steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Large Background Number */}
              <div className="absolute -top-10 -left-4 md:-top-16 md:-left-8 text-7xl md:text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-200 to-transparent select-none z-0 opacity-60">
                {step.number}
              </div>
              
              <div className="relative z-10 mt-8 md:mt-12">
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting line on desktop (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-sky-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
