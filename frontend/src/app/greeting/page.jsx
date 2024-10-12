"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Spline from "@splinetool/react-spline";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

function Greeting() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl overflow-hidden">
        <CardContent className="p-0">
          <div className="h-64 md:h-96 w-full">
            <Spline scene="https://prod.spline.design/2cDKuqkihKSsnwJh/scene.splinecode" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4 p-6">
          <p className="text-center text-lg text-gray-600">
            Let's set up your first AI chatbot in just a few minutes! It's easy,
            fun, and will revolutionize your customer interactions.
          </p>
          <Link href="create-chatbot/chatbot">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Greeting;
