import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter.jsx';
import { useState } from 'react';

const Expenses = (expenses) => {

    const [filteredYear,setFilteredYear]=useState('2024')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
      };
  
  const renderExpenses = expenses.items.map((expense) => {
    return (
      <ExpenseItem
        key={expense.title}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
        {renderExpenses}
      </Card>
    </div>
  );
};

export default Expenses;
