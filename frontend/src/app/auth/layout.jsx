"use client";
import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

function FormLayout({ children }) {
  return (
    <Provider store={store}>
      <div className="w-full lg:grid lg:h-screen lg:grid-cols-2 xl:h-screen overflow-hidden">
        <div className="flex items-center justify-center ">
          <div className="mx-auto grid w-[450px] gap-6">{children}</div>
        </div>
        <div className="hidden bg-muted lg:flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            ChatBot Crafter
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Design Your Perfect Digital Assistant
          </p>
          <div className="space-y-4 text-left">
            <FeatureItem icon="💬" text="Customize conversation flows" />
            <FeatureItem icon="🎨" text="Personalize bot appearance" />
            <FeatureItem icon="🧠" text="Train with your own data" />
            <FeatureItem icon="🔗" text="Integrate with your favorite apps" />
          </div>
        </div>
      </div>
    </Provider>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center">
      <span className="text-2xl mr-4">{icon}</span>
      <span className="text-lg">{text}</span>
    </div>
  );
}

export default FormLayout;
