import React from "react";

import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.h2}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.errorMessage}</p>
      </div>
      <footer className={classes.action}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
