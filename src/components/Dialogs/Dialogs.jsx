import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <div className={`${s.item}  ${s.active}`}>
            <NavLink to="/dialogs/1">Jon</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialogs/2">Ben</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialogs/3">Sara</NavLink>
            </div>
          <div className={s.item}>
            <NavLink to="/dialogs/4">Anna</NavLink>
            </div>
          <div className={s.item}>
            <NavLink to="/dialogs/5">Den</NavLink>
            </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>How are you?</div>
          <div className={s.message}>Good!</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
