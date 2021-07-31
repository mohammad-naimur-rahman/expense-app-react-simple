import ExpenseItem from '../Expenses/ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
      {
        expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
      }
    </Card>
  );
};

export default Expenses