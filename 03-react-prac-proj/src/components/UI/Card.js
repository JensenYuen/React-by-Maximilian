import React from "react";

import classes from "./Card.module.css"

const Card = (props) => {
  return(
    <div className={`${props.className} ${classes['form-wrapper']}`}>
      {props.children}
    </div>
  );
};

export default Card;
