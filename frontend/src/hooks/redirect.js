export const handleRedirection = (action) => {
  if (action === "login") {
    window.location.href = "/chatbots"; // Redirect to dashboard
  } else {
    window.location.href = "/create-chatbot/more-info"; // Example: go to project steps
  }
};
