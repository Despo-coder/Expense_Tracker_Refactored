'use client'
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function TransactionForm() {
  const [formData, setFormData] = useState({
    type: '',
    category: '',
    paymentMethod: '',
    amount: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Card className="container mt-16 p-6 shadow-lg border border-gray-200 rounded-lg">
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Transaction Type</label>
          <select id="type" name="type" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
          <select id="category" name="category" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Category</option>
            {/* Add category options */}
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="paymentMethod" className="block mb-2 text-sm font-medium text-gray-900">Payment Method</label>
          <select id="paymentMethod" name="paymentMethod" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Payment Method</option>
            {/* Add payment method options */}
          </select>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button type="submit" className="px-6 py-2 bg-black text-white hover:bg-black/80  rounded-xl">Add Transaction</Button>
      </div>
    </form>
  </Card>
  );
}

export default TransactionForm;
