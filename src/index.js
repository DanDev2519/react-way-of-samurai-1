import state, { subscriber } from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewMessageText, updateNewPostText } from "./redux/state";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(state);

subscriber(renderEntireTree);

reportWebVitals();
