import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
 
function Expenses( expenses) {
    const renderExpenses = expenses.items.map(expense => {
            return (
                <ExpenseItem
                    key={expense.title}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )});     
 
    return (
        <Card className="expenses">
            {renderExpenses}
        </Card>
    );
}
 

export default Expenses;
