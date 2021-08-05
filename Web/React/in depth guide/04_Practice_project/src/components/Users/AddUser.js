import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please fill in all fields",
      });
      return;
    }
    // + converts string to number
    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    props.onAddUser(userName, userAge);

    // empty fields after user is added
    setUserName("");
    setUserAge("");
  };

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const errorHandler = (event) => {
    setError(null);
  };

  // html for and id are for accessibility, no influence on logic
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={userName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={userAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
