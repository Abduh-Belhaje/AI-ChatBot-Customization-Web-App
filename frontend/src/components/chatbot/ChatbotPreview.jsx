"use client";

import React, { useState } from "react";
import { Bot, User, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotPreview({ chatbotData }) {
  const [messages, setMessages] = useState([
    { type: "bot", content: chatbotData.welcomeMessage },
    { type: "user", content: "Hello, can you help me?" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { type: "user", content: inputMessage }]);
      setInputMessage("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: "I'm here to help! What would you like to know?",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-8">
      <div className="border rounded-lg overflow-hidden shadow-lg bg-background">
        <div
          className="p-4 text-primary-foreground flex items-center gap-2"
          style={{ backgroundColor: chatbotData.primaryColor }}
        >
          <img
            src={chatbotData.logo || "/placeholder.svg?height=32&width=32"}
            alt={`${chatbotData.name} Logo`}
            className="w-8 h-8 rounded-full object-cover"
          />
          <h2 className="font-bold text-lg">{chatbotData.name}</h2>
        </div>
        <ScrollArea className="h-64 p-4">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-2 mb-4 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.type === "bot" && (
                  <Bot className="w-6 h-6 text-primary mt-1" />
                )}
                <div
                  className={`p-2 rounded-lg max-w-[80%] ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p>{message.content}</p>
                </div>
                {message.type === "user" && (
                  <User className="w-6 h-6 text-primary mt-1" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </ScrollArea>
        <form
          onSubmit={handleSendMessage}
          className="p-4 border-t bg-muted flex items-center gap-2"
        >
          <Input
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" size="icon" disabled={!inputMessage.trim()}>
            <Send className="w-4 h-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
