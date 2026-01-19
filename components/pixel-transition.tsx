"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

interface PixelTransitionProps {
  isAnimating: boolean;
  onComplete: () => void;
  onMidpoint: () => void;
  targetTheme: "light" | "dark";
  gridSize?: number;
  duration?: number;
}

export function PixelTransition({
  isAnimating,
  onComplete,
  onMidpoint,
  targetTheme,
  gridSize = 7,
  duration = 0.5,
}: PixelTransitionProps) {
  const [mounted, setMounted] = useState(false);
  const [visiblePixels, setVisiblePixels] = useState<Set<number>>(new Set());
  const animationRef = useRef<{ show?: NodeJS.Timeout; hide?: NodeJS.Timeout }>({});
  const hasStartedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isAnimating || hasStartedRef.current) return;

    hasStartedRef.current = true;
    const totalPixels = gridSize * gridSize;
    const staggerMs = (duration * 1000) / totalPixels;

    // Generate random order for appearing
    const showOrder = Array.from({ length: totalPixels }, (_, i) => i)
      .sort(() => Math.random() - 0.5);

    // Phase 1: Show pixels
    let showIndex = 0;
    setVisiblePixels(new Set());

    animationRef.current.show = setInterval(() => {
      if (showIndex < totalPixels) {
        setVisiblePixels(prev => new Set([...prev, showOrder[showIndex]]));
        showIndex++;
      } else {
        clearInterval(animationRef.current.show);

        // Midpoint - switch theme
        onMidpoint();

        // Small delay then start hiding
        setTimeout(() => {
          // Generate different random order for hiding
          const hideOrder = Array.from({ length: totalPixels }, (_, i) => i)
            .sort(() => Math.random() - 0.5);

          let hideIndex = 0;
          animationRef.current.hide = setInterval(() => {
            if (hideIndex < totalPixels) {
              setVisiblePixels(prev => {
                const next = new Set(prev);
                next.delete(hideOrder[hideIndex]);
                return next;
              });
              hideIndex++;
            } else {
              clearInterval(animationRef.current.hide);
              setVisiblePixels(new Set()); // Ensure all pixels are cleared
              hasStartedRef.current = false;
              onComplete();
            }
          }, staggerMs);
        }, 80);
      }
    }, staggerMs);

    return () => {
      clearInterval(animationRef.current.show);
      clearInterval(animationRef.current.hide);
    };
  }, [isAnimating, gridSize, duration, onMidpoint, onComplete]);

  // Reset state when animation completes
  useEffect(() => {
    if (!isAnimating) {
      hasStartedRef.current = false;
      // Clear any remaining pixels and intervals
      clearInterval(animationRef.current.show);
      clearInterval(animationRef.current.hide);
      setVisiblePixels(new Set());
    }
  }, [isAnimating]);

  const totalPixels = gridSize * gridSize;
  const pixelColor = targetTheme === "dark" ? "#09090b" : "#fafafa";

  if (!mounted || (!isAnimating && visiblePixels.size === 0)) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {Array.from({ length: totalPixels }, (_, index) => {
          const isVisible = visiblePixels.has(index);

          return (
            <motion.div
              key={index}
              style={{ backgroundColor: pixelColor }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{
                duration: 0.08,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>
    </div>,
    document.body
  );
}
