"use client";
import { redirectToLoginWithError } from "@/hooks/error";
import React, { useEffect } from "react";

function Failure() {
  useEffect(() => {
    redirectToLoginWithError(); // Redirects to the login page with an error message
  }, []);

  return null; // No need to render anything since the user is being redirected
}

export default Failure;
