"use client";
import { processQueryParams } from "@/hooks/params";
import React, { useEffect } from "react";

function Success() {
  useEffect(() => {
    processQueryParams();
  }, []);

  return null;
}

export default Success;
