import { combineReducers } from "redux";
import types from "../types";
import auth from "./auth";
import actions from "../actions";

const appReducer = combineReducers({
  auth,
});

const rootReducer = (state, action) => {
  if (actions.type == types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
