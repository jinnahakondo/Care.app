export default function BookingStepper({ currentStep = 1 }) {
  const steps = [
    { number: 1, label: "Service Info" },
    { number: 2, label: "Location" },
    { number: 3, label: "Schedule" },
    { number: 4, label: "Review" },
  ];

  return (
    <div className="mb-10">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        {steps.map((step, index) => {
          const isActive = step.number <= currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.number} className="flex w-full items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ring-4 ${
                    isActive
                      ? "bg-[#2b9dee] text-white ring-[#2b9dee]/20"
                      : "bg-slate-200 text-slate-500 dark:bg-slate-700"
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`text-xs font-semibold ${
                    isActive ? "text-[#2b9dee]" : "text-slate-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {!isLast && (
                <div
                  className={`mx-4 -mt-6 h-1 flex-1 ${
                    isActive ? "bg-[#2b9dee]" : "bg-slate-200 dark:bg-slate-700"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
