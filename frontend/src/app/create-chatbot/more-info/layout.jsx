"use client";
import React from "react";

function FormLayout({ children }) {
  return (
    <div>
      <Content>{children}</Content>
    </div>
  );
}

function Content({ children }) {
  return (
    <div className="w-full h-screen overflow-hidden lg:grid lg:grid-cols-2">
      {/* Center the form on mobile */}
      <div className="flex items-center justify-center h-full ">
        <div className="mx-auto grid gap-6">{children}</div>
      </div>
      {/* Hidden image on mobile, visible on larger screens */}
      <div className="hidden lg:flex flex-col items-center justify-center h-full bg-muted p-8 text-center">
        {/* Replace 'dd' with your image or content */}
        <img
          src="/path/to/your/image.jpg"
          alt="Your Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default FormLayout;
