import axios from "axios";
import types from "../actionsTypes";
import { postsRoutes } from "../../routes";
import { AsyncStorage } from "react-native";

export default GetPostsByUserId = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");
    fetch(postsRoutes.get_posts_by_user_id, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer  ${token}`
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
          type: types.get_posts_by_user_id,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: types.get_posts_by_user_id_error,
          payload: "Failed to get posts by user id."
        });
      });
  };
};
