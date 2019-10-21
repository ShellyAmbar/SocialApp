import types from "../actions/actionsTypes";
const DEFAULT_STATE = {
  isAddedNewPost: false,
  postsByUserId: [],
  allPosts: [],
  isPostDeleted: false,
  errorMassage: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.add_post:
      return {
        ...state,
        errorMassage: "",
        isAddedNewPost: true
      };
    case types.delete_post:
      return {
        ...state,
        errorMassage: "",
        isPostDeleted: true
      };
    case types.get_all_posts:
      return {
        ...state,
        errorMassage: "",
        allPosts: action.payload
      };
    case types.get_posts_by_user_id:
      return {
        ...state,
        errorMassage: "",
        postsByUserId: action.payload
      };

    case types.add_post_error:
      return {
        ...state,
        errorMassage: action.payload
      };
    case types.delete_post_error:
      return {
        ...state,
        errorMassage: action.payload
      };
    case types.get_all_posts_error:
      return {
        ...state,
        errorMassage: action.payload
      };
    case types.get_posts_by_user_id_error:
      return {
        ...state,
        errorMassage: action.payload
      };

    default:
      return state;
  }
};
