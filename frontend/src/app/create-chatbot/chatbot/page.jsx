"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StepContent from "@/components/chatbot/StepContent";
import ChatbotPreview from "@/components/chatbot/ChatbotPreview";
import StepNavigation from "@/components/chatbot/StepNavigation";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Bot, Paintbrush, MessageSquare, BookOpen } from "lucide-react";

const steps = [
  {
    title: "Basic Info",
    description: "Name your chatbot",
    icon: <Bot className="w-5 h-5" />,
  },
  {
    title: "Appearance",
    description: "Customize the look",
    icon: <Paintbrush className="w-5 h-5" />,
  },
  {
    title: "Greeting",
    description: "Set up the welcome message",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    title: "Train Your Bot",
    description: "Add knowledge to your chatbot",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

export default function ChatbotSetupWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [chatbotData, setChatbotData] = useState({
    name: "My Chatbot",
    primaryColor: "#7C3AED",
    logo: "/placeholder.svg?height=50&width=50",
    welcomeMessage: "Hello! How can I assist you today?",
    industry: "",
    dataSources: "",
    trainingNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChatbotData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setChatbotData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setChatbotData((prev) => ({ ...prev, logo: e.target?.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    console.log("Chatbot Data:", chatbotData);
    // You can also handle additional logic, like sending data to an API
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <main className="flex-grow p-4">
        <div className="max-w-7xl mx-auto">
          <Card className="w-full mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center gap-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  {steps[currentStep].title}
                </span>
                {steps[currentStep].icon}
              </CardTitle>
              <p className="text-muted-foreground">
                {steps[currentStep].description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                  <div className="mb-6">
                    <Progress
                      value={((currentStep + 1) / steps.length) * 100}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700"
                    />
                  </div>
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <StepContent
                      currentStep={currentStep}
                      chatbotData={chatbotData}
                      handleInputChange={handleInputChange}
                      handleSelectChange={handleSelectChange}
                      handleLogoUpload={handleLogoUpload}
                    />
                  </motion.div>
                  <div className="flex justify-between items-end mt-8">
                    <StepNavigation
                      currentStep={currentStep}
                      stepsLength={steps.length}
                      handleBack={handleBack}
                      handleNext={handleNext}
                      onFinish={handleFinish}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <Tabs defaultValue="preview" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold">
                            Chatbot Preview
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ChatbotPreview chatbotData={chatbotData} />
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="code">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold">
                            Generated Code
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto">
                            <code>{JSON.stringify(chatbotData, null, 2)}</code>
                          </pre>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
