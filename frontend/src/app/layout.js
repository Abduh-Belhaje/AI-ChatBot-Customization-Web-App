"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
