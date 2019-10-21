import axios from "axios";
import { followersRoutes } from "../../routes";
import types from "../actionsTypes";
import { AsyncStorage } from "react-native";

export default GetFollowersByUserId = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");

    fetch(followersRoutes.get_followers_by_user_id, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer" + token
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
          type: types.get_followers_by_id,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);

        dispatch({
          type: types.get_followers_by_id_error,
          payload: "Failed to get all followers by user id."
        });
      });
  };
};
