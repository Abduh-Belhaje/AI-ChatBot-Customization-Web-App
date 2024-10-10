// components/Form/StepIndicator.js
const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between px-2 mb-8">
      {steps.map((step) => (
        <div key={step.id} className="flex flex-col items-center relative">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold mb-2 transition-all duration-300 ${
              step.id === currentStep
                ? "bg-primary text-primary-foreground"
                : step.id < currentStep
                ? "bg-primary/20 text-primary"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {step.id}
          </div>
          <div className="text-xs font-medium">{step.title}</div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
