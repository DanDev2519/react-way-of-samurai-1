import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={classes.nav}>
		<ul>
			<li className={`${classes.item} ${classes.active}`}><a href="#1">Profile</a></li>
			<li className={classes.item}><a href="#1">Messages</a></li>
			<li className={classes.item}><a href="#1">News</a></li>
			<li className={classes.item}><a href="#1">Music</a></li>
			<li className={classes.item}><a href="#1">Settings</a></li>
		</ul>
	</nav>
)
};

export default Navbar;