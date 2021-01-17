import store from "./redux/redux-store";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        store={store}
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        // updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

reportWebVitals();
