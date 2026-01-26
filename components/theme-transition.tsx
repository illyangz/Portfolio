"use client";

import { SplitScreen } from "./transitions";

interface ThemeTransitionProps {
  isAnimating: boolean;
  onComplete: () => void;
  onMidpoint: () => void;
  targetTheme: "light" | "dark";
}

export function ThemeTransition({
  isAnimating,
  onComplete,
  onMidpoint,
  targetTheme,
}: ThemeTransitionProps) {
  return (
    <SplitScreen
      isAnimating={isAnimating}
      onComplete={onComplete}
      onMidpoint={onMidpoint}
      targetTheme={targetTheme}
      duration={1}
      direction="horizontal"
    />
  );
}
