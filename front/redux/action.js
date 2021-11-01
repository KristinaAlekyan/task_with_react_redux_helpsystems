import { DELETE_USER } from "./actionTypes";

export const deleteUser = (userId) => (dispatch) => {
  dispatch({
    type: DELETE_USER,
    payload: {
      userId,
    },
  });
};

