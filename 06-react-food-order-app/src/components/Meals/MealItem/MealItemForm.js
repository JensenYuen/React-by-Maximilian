import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";

const MealIteamForm = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("in form submit handler");
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id:'amount' + props.id,
          type:'number',
          min:'1',
          max:'5',
          defaultValue: '1'
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealIteamForm;
