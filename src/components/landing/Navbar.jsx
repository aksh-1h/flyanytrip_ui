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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Plane className="w-6 h-6 text-primary group-hover:-translate-y-1 transition-transform" />
          <span className="font-heading font-bold text-xl tracking-tight text-slate-900">
            FlyAnyTrip
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#blog" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Blog
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Sign In
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2 px-5 rounded-full transition-colors shadow-sm hover:shadow-md">
            Get Started Free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
