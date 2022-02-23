import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Another way to convert multi state into one state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    const newTitle = event.target.value;
    setEnteredTitle(newTitle);

    // Another way to convert multi state into one state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: newTitle,
    // });

    // Updating states that depends on prev states
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: newTitle
    //   };
    // });
  };
  const amountChangeHandler = (event) => {
    const newAmount = event.target.value;
    setEnteredAmount(newAmount);

    // Another way to convert multi state into one state
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: newAmount,
    // });
  };
  const dateChangeHandler = (event) => {
    const newDate = event.target.value;
    setEnteredDate(newDate);

    // Another way to convert multi state into one state
    // setUserInput({
    //   ...userInput,
    //   enteredDate: newDate,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
