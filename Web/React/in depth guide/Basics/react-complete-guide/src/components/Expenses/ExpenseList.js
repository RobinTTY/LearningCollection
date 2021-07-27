import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const changeFilterHandler = (year) => {
    setSelectedYear(year);
    console.log(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expenses) => expenses.date.getFullYear().toString() === selectedYear
  );

  let expensesContent = <p>No expenses for this time frame.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={changeFilterHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default ExpenseList;
