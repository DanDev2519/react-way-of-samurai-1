import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DailogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={`${s.item}  ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.text}</div>;
};

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Jon" },
    { id: 2, name: "Ben" },
    { id: 3, name: "Sara" },
    { id: 4, name: "Anna" },
    { id: 5, name: "Den" }
  ];
  
    let messages = [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Good!" }
    ];

  let dialogsElements = dialogs.map( d => <DailogItem name={d.name} id={d.id} />);
  let messagesElements = messages.map (m => <Message text={m.message} />);

  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          { dialogsElements }
        </div>
        <div className={s.messages}>
          { messagesElements }
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
