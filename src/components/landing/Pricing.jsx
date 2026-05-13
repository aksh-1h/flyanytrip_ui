"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Simple, transparent pricing
          </h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-primary rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform ${isAnnual ? "translate-x-6" : ""}`} />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Annually <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col"
          >
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Free</h3>
            <p className="text-slate-500 mb-6">For casual travelers</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900">₹0</span>
              <span className="text-slate-500">/month</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {["Basic AI itinerary builder", "3 trips per month", "Real-time flight search", "Email support"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-full font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
              Get Started Free
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border-2 border-primary shadow-xl shadow-primary/10 flex flex-col relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
              MOST POPULAR
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Pro</h3>
            <p className="text-slate-500 mb-6">For frequent flyers</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900">{isAnnual ? "₹399" : "₹499"}</span>
              <span className="text-slate-500">/month</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Unlimited trips", 
                "Hotel booking integration", 
                "Group travel voting mode", 
                "Priority AI generation (3x faster)", 
                "Offline itinerary access"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-full font-bold text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
              Upgrade to Pro
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
