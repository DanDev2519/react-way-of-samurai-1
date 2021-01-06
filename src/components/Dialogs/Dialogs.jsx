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
  return (
    <div className={s.message}>{props.text}</div>
  );
};

const Dialogs = () => {
  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <DailogItem name="Jon" id="1" />
          <DailogItem name="Ben" id="2" />
          <DailogItem name="Sara" id="3" />
          <DailogItem name="Anna" id="4" />
          <DailogItem name="Den" id="5" />
        </div>
        <div className={s.messages}>
          <Message text="Hi"/>
          <Message text="How are you?"/>
          <Message text="Good!"/>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
