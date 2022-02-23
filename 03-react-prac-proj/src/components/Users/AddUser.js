import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    const userInput = event.target[0].value;
    const userAge = event.target[1].value;
    console.log(userInput, userAge);
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
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
