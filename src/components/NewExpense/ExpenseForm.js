import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {

  const [enteredTitle, setenteredTitle] = useState('')
  const [enteredAmount, setenteredAmount] = useState('')
  const [enteredDate, setenteredDate] = useState('')
  const [error, seterror] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    if (enteredTitle === '' || enteredAmount === '' || enteredDate === '') {
      seterror(true)
      return
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    onSaveExpenseData(expenseData)

    setenteredTitle('')
    setenteredAmount('')
    setenteredDate('')
    seterror(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={e => setenteredTitle(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step='0.01' value={enteredAmount} onChange={e => setenteredAmount(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={e => setenteredDate(e.target.value)} />
        </div>
      </div>
      {
        error && <p style={{ color: 'white', border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'red' }}>Input field can not be empty</p>
      }
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm