import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function StepContent({
  currentStep,
  chatbotData,
  handleInputChange,
  handleSelectChange,
  handleLogoUpload,
  handleRemoveTrainingItem,
  handleTrainingDataChange,
  handleAddTrainingItem,
}) {
  const renderTooltip = (content) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="w-4 h-4 ml-2 text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  switch (currentStep) {
    case 0:
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Let's Get Started!</h2>
            <p className="text-muted-foreground mb-6">
              Welcome to the chatbot creation process. Let's begin by setting up
              the basics for your new assistant.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center">
                Chatbot Name
                {renderTooltip(
                  "Choose a friendly, memorable name for your chatbot."
                )}
              </Label>
              <Input
                id="name"
                name="name"
                value={chatbotData.name}
                onChange={handleInputChange}
                placeholder="e.g., SalesBot, CustomerSupport"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry" className="flex items-center">
                Industry
                {renderTooltip(
                  "Select the industry that best fits your chatbot's purpose."
                )}
              </Label>
              <Select
                name="industry"
                onValueChange={(value) => handleSelectChange("industry", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Design Your Chatbot</h2>
            <p className="text-muted-foreground mb-6">
              Make your chatbot visually appealing and aligned with your brand.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="primaryColor" className="flex items-center">
                Primary Color
                {renderTooltip(
                  "Choose a color that matches your brand identity."
                )}
              </Label>
              <div className="flex items-center gap-4">
                <Input
                  id="primaryColor"
                  name="primaryColor"
                  type="color"
                  value={chatbotData.primaryColor}
                  onChange={handleInputChange}
                  className="w-16 h-10"
                />
                <Input
                  value={chatbotData.primaryColor}
                  onChange={handleInputChange}
                  name="primaryColor"
                  className="flex-grow"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="logo" className="flex items-center">
                Logo
                {renderTooltip("Upload a logo to personalize your chatbot.")}
              </Label>
              <div className="flex items-center gap-4">
                <img
                  src={
                    chatbotData.logo || "/placeholder.svg?height=48&width=48"
                  }
                  alt="Logo"
                  className="w-12 h-12 rounded object-cover"
                />
                <Label
                  htmlFor="logoUpload"
                  className="cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                >
                  Upload Logo
                </Label>
                <Input
                  id="logoUpload"
                  type="file"
                  className="hidden"
                  onChange={handleLogoUpload}
                  accept="image/*"
                />
              </div>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Craft Your Welcome Message
            </h2>
            <p className="text-muted-foreground mb-6">
              Create a warm, inviting message to greet your users when they
              first interact with your chatbot.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="welcomeMessage" className="flex items-center">
                Welcome Message
                {renderTooltip(
                  "This is the first message users will see. Make it friendly and informative!"
                )}
              </Label>
              <Textarea
                id="welcomeMessage"
                name="welcomeMessage"
                value={chatbotData.welcomeMessage}
                onChange={handleInputChange}
                placeholder="e.g., Hello! I'm your friendly assistant. How can I help you today?"
                rows={4}
              />
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Train Your Chatbot</h2>
            <p className="text-muted-foreground mb-6">
              Provide information sources to make your chatbot knowledgeable and
              helpful.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dataSources" className="flex items-center">
                Training Data Source
                {renderTooltip(
                  "Enter URLs or document names that contain relevant information for your chatbot."
                )}
              </Label>
              <Input
                id="dataSources"
                name="dataSources"
                value={chatbotData.dataSources}
                onChange={handleInputChange}
                placeholder="e.g., https://www.yourwebsite.com/faq, product_manual.pdf"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="trainingNotes" className="flex items-center">
                Training Notes
                {renderTooltip(
                  "Add any specific instructions or focus areas for training your chatbot."
                )}
              </Label>
              <Textarea
                id="trainingNotes"
                name="trainingNotes"
                value={chatbotData.trainingNotes}
                onChange={handleInputChange}
                placeholder="e.g., Focus on product features and common customer questions."
                rows={4}
              />
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
