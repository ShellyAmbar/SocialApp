import types from "../actions/actionsTypes";
const DEFAULT_STATE = {
  errorMassage: "",
  isAddedFollow: false,
  followersById: [],
  myFollowers: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.add_follower:
      return {
        ...state,
        isAddedFollow: true,
        errorMassage: ""
      };
    case types.get_followers_by_id:
      return {
        ...state,
        errorMassage: "",
        followersById: action.payload
      };
    case types.get_my_followers:
      return {
        ...state,
        errorMassage: "",
        myFollowers: action.payload
      };
    case types.add_follower_error:
      return {
        ...state,
        errorMassage: action.payload
      };
    case types.get_followers_by_id_error:
      return {
        ...state,
        errorMassage: action.payload
      };
    case types.get_my_followers_error:
      return {
        ...state,
        errorMassage: action.payload
      };
    default:
      return state;
  }
};
