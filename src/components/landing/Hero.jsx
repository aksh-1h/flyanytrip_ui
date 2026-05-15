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
              Book Cheaper Flights.<br />
              <span className="text-slate-600">Zero Hidden Fees.</span><br />
              <span className="font-script text-6xl md:text-7xl lg:text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 block mt-2">Travel More.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Stop overpaying on other travel apps. FlyAnyTrip finds you the absolute cheapest flights by cutting out the middleman fees—so you can spend your money on the trip, not the booking.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-full border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                Download for iOS
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-full border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <svg viewBox="0 0 466 511.98" className="w-5 h-5">
                  <path fill="#EA4335" d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z"/>
                  <path fill="#FBBC04" d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z"/>
                  <path fill="#34A853" d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z"/>
                  <path fill="#4285F4" d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z"/>
                </svg>
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
