import { useState } from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
import expensesData from "./data/expenses"


function App() {
  const [expenses, setexpenses] = useState(expensesData)
  return (
    <div>
      <NewExpense setexpenses={setexpenses} />
      <Expenses expenses={expenses} setexpenses={setexpenses} />
    </div>
  )
}

export default App
