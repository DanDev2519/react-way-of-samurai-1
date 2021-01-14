import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        // updateNewPostText={store.updateNewPostText.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscriber(renderEntireTree);

reportWebVitals();
