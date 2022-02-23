import React from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event);
    const userInput = '';
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input id="age"type="number" />
        </div>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
