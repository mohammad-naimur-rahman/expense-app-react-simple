import { useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ setexpenses }) => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    setexpenses(expenses => [expenseData, ...expenses])
  }

  const [showBtn, setshowBtn] = useState(true)

  return (
    <div className='new-expense'>
      {
        showBtn ? <button onClick={() => setshowBtn(false)}>Add New Expense</button> : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      }
    </div>
  );
};

export default NewExpense