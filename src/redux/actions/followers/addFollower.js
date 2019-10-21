import axios from "axios";
import { followersRoutes } from "../../routes";
import types from "../actionsTypes";
import { AsyncStorage } from "react-native";

export default AddFollower = user_id => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");
    fetch(followersRoutes.add_follower, {
      method: "POST",

      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer" + token
      },
      body: JSON.stringify({
        f_user_id: user_id
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
          type: types.add_follower,
          payload: respond.data
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({
          type: types.add_follower_error,
          payload: "Faile to add follow"
        });
      });
  };
};
