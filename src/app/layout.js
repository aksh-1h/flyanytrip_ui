import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlyAnyTrip | Your next trip, planned in seconds",
  description: "FlyAnyTrip uses AI to instantly create personalized travel itineraries, find the best flights, and book hotels.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
