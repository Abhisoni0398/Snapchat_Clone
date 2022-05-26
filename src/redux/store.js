import reducers from "./reducers";
import { configureStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middlewares = [thunk];

export default configureStore(reducers, applyMiddleware(...middlewares));
