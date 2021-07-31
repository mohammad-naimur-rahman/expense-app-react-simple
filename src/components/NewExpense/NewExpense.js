import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ setexpenses }) => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    setexpenses(expenses => [...expenses, expenseData])
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense