"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const LenisProvider = dynamic(
  () => import("@/components/providers/LenisProvider"),
  { ssr: false }
);

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<>{children}</>}>
      <LenisProvider>{children}</LenisProvider>
    </Suspense>
  );
}
