import React from "react";
import { Link } from "react-router-dom";

import classes from "../../styles/header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Event</Link>
      </div>
      <nav className={classes.navigation}>
        <Link to={"/AddEvent"}>Add Event</Link>
      </nav>
    </header>
  );
};

export default Header;
