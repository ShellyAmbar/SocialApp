import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  authReducer,
  postsReducer,
  followersReducer,
  formReducer
} from "./src/redux/reducers";
import reduxThunk from "redux-thunk";
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  followers: followersReducer,
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;
