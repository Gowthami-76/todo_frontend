import { createStore, applyMiddleware } from "redux";
import globalReducer from "./redux/login/reducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  globalReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
