"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-3xl rounded-full ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/20 py-3 px-6 border border-white/50"
          : "bg-white/30 backdrop-blur-md py-4 px-6 border border-white/30"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Plane className="w-6 h-6 text-primary group-hover:-translate-y-1 transition-transform drop-shadow-sm" />
          <span className="font-heading font-bold text-xl tracking-tight text-slate-900 drop-shadow-sm">
            FlyAnyTrip
          </span>
        </Link>

        {/* Desktop Actions (Minimalist) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Download App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900 bg-white/50 p-2 rounded-full backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link href="#features" className="text-base font-medium text-slate-700 py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>
            Features
          </Link>
          <Link href="#how-it-works" className="text-base font-medium text-slate-700 py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>
            How It Works
          </Link>
          <Link href="#pricing" className="text-base font-medium text-slate-700 py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="#blog" className="text-base font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>
            Blog
          </Link>
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full py-2.5 text-center font-medium text-slate-700 bg-slate-50 rounded-full border border-slate-200">
              Sign In
            </button>
            <button className="w-full py-2.5 text-center font-medium text-white bg-primary rounded-full shadow-sm">
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
