import React from "react";
import { Link } from "react-router-dom";

import classes from "./button.module.css";

const Button = ({ children, link, onClick }) => {
  if (link && !onClick) {
    return (
      <Link to={link} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
