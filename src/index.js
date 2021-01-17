import store from "./redux/redux-store";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoreContext from "./StoreContext";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App store={store} />
        {/* При глобальном контексте для дочерних элементов
        в компоненту можно ничего не передавать */}
        {/* <App /> */} 
      </StoreContext.Provider>
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
