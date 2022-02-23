import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("missing input");
      setError({
        title: "Missing input",
        errorMessage: "Please enter a valid name and age (non-empty value)"
      });
      return;
    }
    if (+enteredAge < 1 || +enteredAge > 100) {
      setError({
        title: "Incorrect age",
        errorMessage: "Please enter a valid age range (1-100)",
      });
      return;
    }

    const user = {
      key: Math.random().toString(),
      username: enteredUsername,
      age: +enteredAge
    };
    props.onAddNewUser(user);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    const username = event.target.value;
    setEnteredUsername(username);
  };

  const ageChangeHandler = (event) => {
    const userAge = event.target.value;
    setEnteredAge(userAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          errorMessage={error.errorMessage}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              min="1"
              max="100"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
