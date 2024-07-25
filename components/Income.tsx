import { addCommas } from "@/assets/utility/addCommas";

function IncomeExpenseSection() {
  const income = 2000; // Replace with actual income
  const expense = 1000; // Replace with actual expense

  return (
    <div className='inc-exp-container '>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${addCommas(Number(income?.toFixed(2)))}.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${addCommas(Number(expense?.toFixed(2)))}.00</p>
      </div>
    </div>
  );
}

export default IncomeExpenseSection;
