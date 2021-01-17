import React from "react";
import {
  addMessageActionCreater,
  updateNewMessageActionCreater,
} from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let addNewMessage = () => {
    props.store.dispatch(addMessageActionCreater());
  };

  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageActionCreater(text));
  };

  return (
    <Dialogs
      state={state}
      addMessage={addNewMessage}
      updateNewMessageText={onNewMessageChange}
    />
  );
};

export default DialogsContainer;
