"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl font-bold text-foreground mb-4">404</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-muted-foreground mb-2">
              page not found
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              the page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
            >
              <Home className="w-4 h-4" />
              home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              go back
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-xs text-muted-foreground"
          >
            <code className="bg-muted px-2 py-1 rounded">
              Error: ENOENT - page not found
            </code>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
