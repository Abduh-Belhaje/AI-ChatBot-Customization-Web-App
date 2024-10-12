import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function StepNavigation({
  currentStep,
  stepsLength,
  handleBack,
  handleNext,
  onFinish, // Add new prop for finish action
}) {
  return (
    <>
      {currentStep > 0 && (
        <Button variant="outline" onClick={handleBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      )}
      {currentStep < stepsLength - 1 ? (
        <Button onClick={handleNext}>
          Next
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      ) : (
        <Button onClick={onFinish}>Finish</Button> // Call onFinish when clicked
      )}
    </>
  );
}
