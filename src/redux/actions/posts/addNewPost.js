import axios from "axios";
import types from "../actionsTypes";
import { postsRoutes } from "../../routes";
import { AsyncStorage } from "react-native";
export default AddNewPost = (title, image_url) => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");
    fetch(postsRoutes.add_post, {
      method: "POST",

      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer" + token
      },
      body: JSON.stringify({
        title: title,
        image_url: image_url
      })
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
          type: types.add_post,
          payload: respond.data
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({
          type: types.add_post_error,
          payload: "Failed to add a new post."
        });
      });
  };
};
