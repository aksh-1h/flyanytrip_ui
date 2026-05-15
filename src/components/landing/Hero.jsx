"use client";

import { motion } from "framer-motion";
import { Play, Star, MapPin, Calendar, CreditCard, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[url('/sky_background.png')] bg-cover bg-center">
      {/* Darken overlay slightly so text is readable if image is bright */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      
      {/* Gradient fade into the main background color of the website */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content (approx 60% on lg) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >


            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-slate-900 leading-[1.1] mb-6">
              Plan Your Dream Trip.<br />
              <span className="text-slate-600">Not in Hours.</span><br />
              <span className="font-script text-6xl md:text-7xl lg:text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 block mt-2">In Seconds.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              FlyAnyTrip uses AI to instantly create personalized travel itineraries, find the best flights, and book hotels — all in one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Download for iOS
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-full border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Download for Android
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
            className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto relative flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* The 3D Mockup */}
            <img src="/mobile_mockup.png" alt="FlyAnyTrip Mobile App" className="w-[85%] object-contain drop-shadow-2xl" />
            
            {/* Floating Element */}
            <motion.div 
              className="absolute -right-6 bottom-16 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white flex items-center gap-3"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-orange-400 to-pink-500 text-white rounded-full flex items-center justify-center shadow-inner">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Next stop</p>
                <p className="text-sm font-bold text-slate-900">Paris, France</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
