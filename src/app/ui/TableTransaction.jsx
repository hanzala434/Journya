'use client';

import { useEffect, useState } from 'react';
import OptionsMenu from './OptionsMenu';
import { fetchTransactions } from '../lib/transactionApi';
import OptionFinancial from './OptionFinancial';

export default function TableTransaction() {
    // const transaction =await fetchtransactions()
  const [transaction, setTransaction] = useState([]); // Store users from API
  const [searchQuery, setSearchQuery] = useState(''); // Search input state

 // Fetch users from API when component mounts
  useEffect(() => {
    async function loadtransaction() {
      try {
        const data = await fetchTransactions();
        setTransaction(data);
      } catch (error) {
        console.error('Error fetching transaction:', error);
      }
    }
    loadtransaction();
  }, []);

  
    const refreshTransaction = async () => {
      const updatedTransactions = await fetchTransactions(); 
      setTransaction(updatedTransactions);
    };

  //Filter users based on search query (name or email)
  const filteredtransaction = transaction.filter(transaction =>
    transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-2">

      {/* Users Table */}
      <div className="flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg p-2">
            <table className="min-w-full bg-white">
              <thead className="text-left rounded bg-opacity-20 text-sm font-semibold bg-[#00BFA6]">
                <tr>
                  <th className="px-3 py-3">NAME</th>
                  <th className="px-3 py-3">EMAIL</th>
                  <th className="px-3 py-3">PACKAGE</th>
                  <th className="px-3 py-3">DATE</th>
                  <th className="px-3 py-3">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredtransaction.length > 0 ? (
                  filteredtransaction.map(transaction => (
                    <tr key={transaction._id} className="border-b text-sm">
                      <td className="px-3 py-3">{transaction.name}</td>
                      <td className="px-3 py-3">{transaction.email}</td>
                      <td className="px-3 py-3">{transaction.package}</td>
                      <td className="px-3 py-3">{transaction.date}</td>

                      <td className="px-3 py-3">
                        <OptionFinancial transaction={transaction} refreshTransaction={refreshTransaction} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center text-gray-500">
                      No transaction found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
