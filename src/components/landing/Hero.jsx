"use client";

import { motion } from "framer-motion";
import { Play, Star, MapPin, Calendar, CreditCard, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#E0F2FE] via-[#F0F9FF] to-background">
      {/* Decorative blurred clouds (simplified as blurred divs for effect) */}
      <div className="absolute top-20 left-10 w-64 h-32 bg-white/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-40 right-20 w-80 h-40 bg-white/60 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-72 h-32 bg-white/50 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content (approx 60% on lg) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/80 shadow-sm backdrop-blur-sm mb-6">
              <span className="text-amber-500 text-lg leading-none">✨</span>
              <span className="text-sm font-semibold text-slate-700">AI-Powered Travel Planning</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[4rem] font-bold text-slate-900 leading-[1.1] mb-6">
              Plan Your Dream Trip.<br />
              <span className="text-slate-500">Not in Hours.</span><br />
              <span className="text-primary">In Seconds.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              FlyAnyTrip uses AI to instantly create personalized travel itineraries, find the best flights, and book hotels — all in one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Start Planning Free <span>→</span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/50 hover:bg-white/80 text-slate-800 font-semibold rounded-full border border-slate-200 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-slate-700" fill="currentColor" /> Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm z-[${10-i}]`} style={{ backgroundColor: `hsl(${200 + i * 15}, 70%, 60%)`}}>
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm font-medium text-slate-600">
                  <span className="text-slate-900 font-bold">4.9/5</span> from 10,000+ travelers
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content (Mockup Card - approx 40% on lg) */}
          <motion.div 
            className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto relative"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full transform -translate-y-4" />
            
            {/* The Card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/50">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">Paris Trip</h3>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 5 Days</span>
                    <span className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> ₹85,000</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-sky-100 text-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4 relative before:absolute before:inset-y-2 before:left-[11px] before:w-0.5 before:bg-slate-100">
                {/* Day 1 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-[10px] font-bold ring-4 ring-white">1</div>
                  <h4 className="font-semibold text-slate-800">Arrival & Eiffel Tower</h4>
                  <p className="text-sm text-slate-500 mt-1">Check into Hotel Lutetia, evening cruise on the Seine.</p>
                </div>
                
                {/* Day 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-[10px] font-bold ring-4 ring-white">2</div>
                  <h4 className="font-semibold text-slate-800">Louvre & Montmartre</h4>
                  <p className="text-sm text-slate-500 mt-1">Skip-the-line tickets booked. Dinner at Le Moulin de la Galette.</p>
                </div>

                {/* Day 3 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center text-[10px] font-bold ring-4 ring-white">3</div>
                  <div className="h-4 w-32 bg-slate-100 rounded animate-pulse mb-2"></div>
                  <div className="h-3 w-48 bg-slate-50 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center text-sm font-medium text-primary bg-sky-50 rounded-xl py-3 gap-2">
                <CheckCircle2 className="w-4 h-4" /> Itinerary Generated
              </div>
            </div>

            {/* Floating Element */}
            <motion.div 
              className="absolute -right-6 bottom-12 bg-white px-4 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-sm">₹</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Flights Found</p>
                <p className="text-sm font-bold text-slate-900">₹42,500 roundtrip</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
