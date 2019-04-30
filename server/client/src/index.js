import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import postsReducer from "./reducers/postsReducer";
import App from "./components/App";

// Development only axios helpers!
import axios from "axios";
window.axios = axios;

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
