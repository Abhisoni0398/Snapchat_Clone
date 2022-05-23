import store from "../store";
import types from "../types";

export function login(data) {
  store.dispatch({
    type: types.IS_LOGIN,
    payload: data,
  });
}
export function logoout() {
  store.dispatch({
    type: types.CLEAR_REDUX_STATE,
    payload: data,
  });
}
