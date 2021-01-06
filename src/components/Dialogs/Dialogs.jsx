import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <div className={`${s.item}  ${s.active}`}>Jon</div>
          <div className={s.item}>Ben</div>
          <div className={s.item}>Sara</div>
          <div className={s.item}>Anna</div>
          <div className={s.item}>Den</div>
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
