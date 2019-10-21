import rootApiRoute from "./rootApi";
export default {
  regiter_user: rootApiRoute.moonsiteApi + "/usr/register/",
  login_user: rootApiRoute.moonsiteApi + "/usr/login/"
};
