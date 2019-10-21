import rootApiRoute from "./rootApi";
export default {
  get_all_posts: rootApiRoute.moonsiteApi + "/post/get-all-posts",
  delete_post_by_id: rootApiRoute.moonsiteApi + "/post/delete-post-by-id/",
  add_post: rootApiRoute.moonsiteApi + "/post/add-post",
  get_posts_by_user_id: rootApiRoute.moonsiteApi + "/post/get-posts-by-user-id"
};
