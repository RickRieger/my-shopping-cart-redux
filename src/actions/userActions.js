import { GET_USER, USER_ERROR } from "./types";

export const getUser = () => async (dispatch) => {
    try {
      const res = await fetch('/user');
      const data = await res.json();
      console.log(data);
      dispatch({
        type: GET_USER,
        payload: data.name,
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err,
      });
    }
  };