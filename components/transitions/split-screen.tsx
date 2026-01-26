"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

interface SplitScreenProps {
  isAnimating: boolean;
  onComplete: () => void;
  onMidpoint: () => void;
  targetTheme: "light" | "dark";
  duration?: number;
  direction?: "horizontal" | "vertical";
}

export function SplitScreen({
  isAnimating,
  onComplete,
  onMidpoint,
  targetTheme,
  duration = 0.6,
  direction = "horizontal",
}: SplitScreenProps) {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"idle" | "closing" | "opening">("idle");
  const hasStartedRef = useRef(false);
  const completedRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isAnimating || hasStartedRef.current) return;
    hasStartedRef.current = true;
    completedRef.current = 0;
    setPhase("closing");
  }, [isAnimating]);

  useEffect(() => {
    if (!isAnimating) {
      hasStartedRef.current = false;
      completedRef.current = 0;
      setPhase("idle");
    }
  }, [isAnimating]);

  const handlePanelComplete = () => {
    completedRef.current++;

    if (phase === "closing" && completedRef.current >= 2) {
      completedRef.current = 0;
      onMidpoint();
      setPhase("opening");
    } else if (phase === "opening" && completedRef.current >= 2) {
      setPhase("idle");
      onComplete();
    }
  };

  const color = targetTheme === "dark" ? "#09090b" : "#fafafa";
  const isHorizontal = direction === "horizontal";

  if (!mounted || phase === "idle") return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        display: "flex",
        flexDirection: isHorizontal ? "column" : "row",
      }}
    >
      {/* First panel */}
      <motion.div
        style={{
          flex: 1,
          backgroundColor: color,
          transformOrigin: isHorizontal ? "top" : "left",
        }}
        initial={{
          [isHorizontal ? "scaleY" : "scaleX"]: 0,
        }}
        animate={{
          [isHorizontal ? "scaleY" : "scaleX"]: phase === "closing" ? 1 : 0,
        }}
        transition={{
          duration: duration / 2,
          ease: [0.7, 0, 0.3, 1],
        }}
        onAnimationComplete={handlePanelComplete}
      />

      {/* Second panel */}
      <motion.div
        style={{
          flex: 1,
          backgroundColor: color,
          transformOrigin: isHorizontal ? "bottom" : "right",
        }}
        initial={{
          [isHorizontal ? "scaleY" : "scaleX"]: 0,
        }}
        animate={{
          [isHorizontal ? "scaleY" : "scaleX"]: phase === "closing" ? 1 : 0,
        }}
        transition={{
          duration: duration / 2,
          ease: [0.7, 0, 0.3, 1],
        }}
        onAnimationComplete={handlePanelComplete}
      />
    </div>,
    document.body
  );
}
