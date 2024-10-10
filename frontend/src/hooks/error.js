export const redirectToLoginWithError = () => {
  const params = new URLSearchParams(window.location.search);
  const error = params.get("err");

  if (error) {
    try {
      const decodedError = decodeURIComponent(error);
      // Redirect to the login page with the error message
      window.location.href = `/auth/login?error=${encodeURIComponent(
        decodedError
      )}`;
    } catch (error) {
      console.error("Failed to decode error message:", error);
      window.location.href = `/auth/login?error=An%20unknown%20error%20occurred`;
    }
  } else {
    // If no error in the URL, redirect to login with a generic message
    window.location.href = `/auth/login?error=An%20unknown%20error%20occurred`;
  }
};
