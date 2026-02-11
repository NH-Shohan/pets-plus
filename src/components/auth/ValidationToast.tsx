'use client';

import { AlertCircle } from 'lucide-react';

export default function ValidationToast({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-foreground shadow-lg"
    >
      <AlertCircle className="h-5 w-5 shrink-0 text-foreground" />
      <span className="text-body-small">{message}</span>
    </div>
  );
}
