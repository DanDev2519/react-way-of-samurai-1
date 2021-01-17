import React from "react";
import DailogItem from "./DailogItem/DailogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DailogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message text={m.message} />
  ));

  let addNewMessage = () => {
    props.addMessage();
  };

  let oninputChange = (evt) => {
    let text = evt.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>{dialogsElements}</div>
        <div>
          <div className={s.messages}>{messagesElements}</div>
          <input
            onChange={oninputChange}
            value={props.state.newMessageText}
            type="text"
            placeholder="Write a message..."
          ></input>
          <button onClick={addNewMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
