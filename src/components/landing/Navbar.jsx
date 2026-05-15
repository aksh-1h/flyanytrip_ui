"use client";

import Link from "next/link";
import { Plane } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-8 left-8 md:left-12 z-50">
      <Link href="/" className="flex items-center gap-2.5 group">
        <div className="bg-white/50 backdrop-blur-sm p-2 rounded-xl shadow-sm border border-white/50 group-hover:bg-white transition-colors">
          <Plane className="w-6 h-6 text-orange-500 group-hover:-translate-y-0.5 transition-transform" />
        </div>
        <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-slate-900 drop-shadow-sm">
          FlyAnyTrip
        </span>
      </Link>
    </header>
  );
}
