import Cookies from "js-cookie";

export const storeUserDataInCookies = (userObject) => {
  Cookies.set("userToken", userObject.token, { expires: 7 });
  Cookies.set("user", JSON.stringify(userObject.user), { expires: 7 });
};
