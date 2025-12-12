"use client";

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from another page
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          // Clean up hash from URL after scroll
          window.history.replaceState(null, "", "/");
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-24">
        <Hero />
        <Work />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
