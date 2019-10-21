import axios from "axios";
import { authRutes } from "../../routes";
import types from "../actionsTypes";
export default Register = (email, password) => {
  return async dispatch => {
    fetch(authRutes.regiter_user, {
      method: "POST",

      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(respond => {
        if (respond.status === 200 && respond.ok === true) {
          return respond.json();
        } else {
          console.log(respond);
          throw Error("error");
        }
      })
      .then(respond => {
        console.log(respond);
        dispatch({
          type: types.register,
          payload: respond.data
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: types.register_error,
          payload: "Error, email is allready in use."
        });
      });
  };
};
