import axios from "axios";
import { postsRoutes } from "../../routes";
import types from "../actionsTypes";
import { AsyncStorage } from "react-native";

export default GetAllPosts = data => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");
    fetch(postsRoutes.get_all_posts, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(response => {
        if (response.status === 200 && response.ok === true) {
          return response.json();
        } else {
          throw Error("error");
        }
      })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: types.get_all_posts,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: types.get_all_posts_error,
          payload: "Failed to get all posts."
        });
      });
  };
};
