import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import rootReducer  from './Redux/services/Reducers/reducers';
import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(rootReducer);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
console.log("storedata",store)


ReactDOM.render(
  <Provider  store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
