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
  let dialogsData = [
    { id: 1, name: "Jon" },
    { id: 2, name: "Ben" },
    { id: 3, name: "Sara" },
    { id: 4, name: "Anna" },
    { id: 5, name: "Den" }
  ];

  let messagesData = [
    { id: 1, messages: "Hi" },
    { id: 2, messages: "How are you?" },
    { id: 3, messages: "Good!" }
  ];

  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <DailogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DailogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          <DailogItem name={dialogsData[2].name} id={dialogsData[2].id} />
          <DailogItem name={dialogsData[3].name} id={dialogsData[3].id} />
          <DailogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        </div>
        <div className={s.messages}>
          <Message text={messagesData[0].messages} />
          <Message text={messagesData[1].messages} />
          <Message text={messagesData[2].messages} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
