import rootApiRoute from "./rootApi";
export default {
  get_my_followers: rootApiRoute.moonsiteApi + "/follower/get-my-followers",
  get_followers_by_user_id:
    rootApiRoute.moonsiteApi + "/followers/get_followers_by_user_id",
  add_follower: rootApiRoute.moonsiteApi + "/follower/add-follower"
};
