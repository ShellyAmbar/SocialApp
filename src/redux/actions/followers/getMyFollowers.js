import axios from "axios";
import { followersRoutes } from "../../routes";
import types from "../actionsTypes";
import { AsyncStorage } from "react-native";
export default GetMyFollowers = data => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");
    fetch(followersRoutes.get_my_followers, {
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
          type: types.get_my_followers,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: types.get_my_followers_error,
          payload: "Failed to get all current user's followers."
        });
      });
  };
};
