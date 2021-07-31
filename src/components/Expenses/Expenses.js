import ExpenseItem from '../Expenses/ExpenseItem'
import Card from '../UI/Card'
import FilterExpenses from '../Expenses/FilterExpenses'
import './Expenses.css'
import { useState } from 'react'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className='expenses'>
      <FilterExpenses
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {
        filteredExpenses.length === 0 && <h2 className='heading'>There is no expense in {filteredYear}</h2>
      }
      {
        filteredExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
      }
    </Card>
  );
};

export default Expenses