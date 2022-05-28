import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middlewares = [thunk];

export default createStore(reducers, applyMiddleware(...middlewares));
