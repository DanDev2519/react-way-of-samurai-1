import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/Users" activeClassName={classes.active}>Users</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/News" activeClassName={classes.active}>News</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/Music" activeClassName={classes.active}>Music</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
