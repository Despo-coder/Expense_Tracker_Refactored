import { addCommas } from "@/assets/utility/addCommas";
import getIncomeExpense from '@/app/actions/getIncomeExpense';

async function IncomeExpenseSection() {
  const { income, expense } = await getIncomeExpense();

  return (
    <div className='inc-exp-container '>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${addCommas(Number(income?.toFixed(2)))}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${addCommas(Number(expense?.toFixed(2)))}</p>
      </div>
    </div>
  );
}

export default IncomeExpenseSection;
