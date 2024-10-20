type StepperProps = {
  steps: string[];
  currentStep: string;
};

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="sticky top-24 bg-white">
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < steps.indexOf(currentStep);
          const isCurrent = index === steps.indexOf(currentStep);

          return (
            <div
              key={step}
              className={`flex items-center flex-col gap-3 relative ${
                isCompleted
                  ? "text-orange"
                  : isCurrent
                  ? "text-orange font-bold"
                  : "text-gray-400"
              }`}
            >
              <div
                className={`
                rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 
                border-2 flex items-center justify-center
                ${
                  isCompleted
                    ? "border-orange text-white bg-orange"
                    : isCurrent
                    ? "border-orange bg-orange text-white"
                    : "border-gray-300 text-gray-400"
                }
              `}
              >
                {index + 1}
              </div>
              <div className="text-center  w-32 text-xs font-medium uppercase">
                {step}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
