import axios from "axios";
import { postsRoutes } from "../../routes";
import types from "../actionsTypes";
import { AsyncStorage } from "react-native";

export default DeletePost = post_id => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");
    fetch(postsRoutes.delete_post_by_id + "/${post_id}", {
      method: "POST",

      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(respond => {
        if (respond.status === 200 && respond.ok === true) {
          return respond.json();
        } else {
          throw Error("error");
        }
      })
      .then(respond => {
        console.log(respond);
        dispatch({
          type: types.delete_post,
          payload: respond.data
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({
          type: types.delete_post_error,
          payload: "Failed to delete post."
        });
      });
  };
};
