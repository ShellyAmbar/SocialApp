import types from "../actions/actionsTypes";
const DEFAULT_STATE = {
  isAuthenticate: false,
  token: "",
  user_id: "",
  errorMassage: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        token: action.payload.token,
        user_id: action.payload.user_id,
        isAuthenticate: true,
        errorMassage: ""
      };
    case types.register:
      return {
        ...state,
        token: action.payload.token,
        user_id: action.payload.user_id,
        isAuthenticate: true,
        errorMassage: ""
      };
    case types.login_error:
      return {
        ...state,

        errorMassage: action.payload
      };
    case types.register_error:
      return {
        ...state,

        errorMassage: action.payload
      };

    default:
      return state;
  }
};
