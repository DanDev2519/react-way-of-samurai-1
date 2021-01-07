import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DailogItem.module.css";

const DailogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={`${s.item}  ${s.active}`}>
      <NavLink  to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DailogItem;
