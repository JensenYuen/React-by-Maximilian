import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);

  const clickHandler = (_e) => {
    setTitle("new title");
  };

  return (
    <li>
      <Card div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item-description">
          <h2>{title}</h2>
          <div className="expense-item-price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
