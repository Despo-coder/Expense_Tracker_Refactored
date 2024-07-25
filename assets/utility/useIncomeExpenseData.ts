'use client';
import { useState, useEffect } from "react";
import getIncomeExpense from "@/app/actions/getIncomeExpense";

export function useIncomeExpenseData() {
    const [data, setData] = useState({
      income: 0,
      expense: 0,
      categoryBreakdown: {},
      paymentTypeBreakdown: {},
      dailySpendBreakdown: {}
    });
  
    const fetchData = async () => {
      const result = await getIncomeExpense();
      setData({
        income: result.income ?? 0,
        expense: result.expense ?? 0,
        categoryBreakdown: result.categoryBreakdown ?? {},
        paymentTypeBreakdown: result.paymentTypeBreakdown ?? {},
        dailySpendBreakdown: result.dailySpendBreakdown ?? {}
      });
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return { data, refetch: fetchData };
  }
  