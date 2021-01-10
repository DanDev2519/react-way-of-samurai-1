import React from "react";
import DailogItem from "./DailogItem/DailogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((d) => (
    <DailogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => <Message text={m.message} />);

  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
