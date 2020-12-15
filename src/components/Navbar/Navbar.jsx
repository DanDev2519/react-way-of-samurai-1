import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={classes.nav}>
		<ul>
			<li className={`${classes.item} ${classes.active}`}><a>Profile</a></li>
			<li className={classes.item}><a>Messages</a></li>
			<li className={classes.item}><a>News</a></li>
			<li className={classes.item}><a>Music</a></li>
			<li className={classes.item}><a>Settings</a></li>
		</ul>
	</nav>
)
};

export default Navbar;