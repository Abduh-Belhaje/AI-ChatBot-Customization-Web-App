import { handleRedirection } from "./redirect";
import { storeUserDataInCookies } from "./UserCoockies";

export const processQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const encodedResp = params.get("resp");
  const encodedAct = params.get("action");

  if (encodedResp && encodedAct) {
    try {
      const decodedResp = decodeURIComponent(encodedResp);
      const userObject = JSON.parse(decodedResp);

      storeUserDataInCookies(userObject);
      handleRedirection(encodedAct);
    } catch (error) {
      console.error("Failed to parse user data:", error);
    }
  }
};
