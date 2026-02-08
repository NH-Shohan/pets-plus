"use client";

import { ReactLenis } from "lenis/react";

const LENIS_OPTIONS = {
  lerp: 0.025,
  duration: 1,
  smoothWheel: true,
  autoRaf: true,
  wheelMultiplier: 0.8,
  touchMultiplier: 0.8,
  orientation: "vertical" as const,
} as const;

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
