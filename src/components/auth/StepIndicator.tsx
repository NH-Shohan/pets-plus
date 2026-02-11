'use client';

export default function StepIndicator({ currentStep, totalSteps = 4 }: { currentStep: number; totalSteps?: number }) {
  return (
    <div
      className="flex items-center gap-1 mb-6 max-w-[max(160px,8.34vw)] mx-auto"
      aria-label={`Step ${currentStep} of ${totalSteps}`}
    >
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full transition-colors ${i + 1 <= currentStep ? 'bg-primary' : 'bg-[#EDF0F2]'}`}
        />
      ))}
    </div>
  );
}
