"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary to-indigo-600">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute text-white/10 top-10 right-[10%]"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Plane className="w-64 h-64 rotate-45" />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to fly anywhere?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 10,000+ travelers who plan smarter with FlyAnyTrip.
          </p>
          
          <button className="px-8 py-5 bg-white text-primary hover:bg-slate-50 font-bold rounded-full text-lg shadow-xl shadow-black/10 transition-transform hover:-translate-y-1">
            Start Planning Free — It&apos;s Free Forever
          </button>
        </motion.div>
      </div>
    </section>
  );
}
