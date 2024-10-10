// components/Form/YourComponent.js
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PersonalInfo from "@/components/form/PersonalInfo";
import BusinessInfo from "@/components/form/BusinessInfo";
import AppAndCompany from "@/components/form/AppAndCompany";
import StepIndicator from "@/components/form/StepIndicator";

const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Business Info" },
  { id: 3, title: "App & Company" },
];

export default function YourComponent() {
  const [formData, setFormData] = useState({
    moreInfo: {
      fullName: "",
      role: "",
      typeOfAds: "",
    },
    businessInfo: {
      name: "",
      type: "",
      department: "",
    },
    appAndCompany: {
      type: "",
    },
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    window.location.href = "/greeting";
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <BusinessInfo
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <AppAndCompany
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Let's Get to Know You and Your Company!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <StepIndicator steps={steps} currentStep={currentStep} />
        {renderStepContent()}
      </CardContent>
      <CardFooter className="flex justify-between">
        {currentStep > 1 && (
          <Button variant="outline" onClick={handlePrevious}>
            Back
          </Button>
        )}
        {currentStep < steps.length ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </CardFooter>
    </Card>
  );
}
