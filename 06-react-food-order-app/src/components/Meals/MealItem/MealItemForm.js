import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";

const MealIteamForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const amount = +enteredAmount;
    if (enteredAmount.trim().length === 0 || amount < 1 || amount > 5)
    {
      setAmountIsValid(false);
      return;
    } else {
      props.onAddToCart(amount);
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id:'amount_' + props.id,
          type:'number',
          min:'1',
          max:'5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Amount is invalid</p>}
    </form>
  );
};

export default MealIteamForm;
