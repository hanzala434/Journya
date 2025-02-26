import { Transaction} from "./data";

const ITEMS_PER_PAGE = 6;

// Fetch all Transactions
export async function fetchTransactions() {
  console.log("NEXTAUTH_URL:", process.env.NEXT_PUBLIC_NEXTAUTH_URL);

  const response=await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/transaction`);
  const transaction=await response.json();
  return transaction;
}

// Fetch a single Transaction by ID
export async function fetchTransactionById(id) {
  const sub = Transaction.find((sub) => sub.id === id);
  if (!sub) throw new Error("Transaction not found");
  return sub;
}

// Create a new Transaction
// export async function createTransaction({ name, email, package, renewalDate }) {
//   const newTransaction = {
//     id: (Transaction.length + 1).toString(),
//     name,
//     email,
//     package,
//     renewalDate,
//   };

//   Transaction.push(newTransaction);
//   return newTransaction;
// }

// Update an existing Transaction
export async function updateTransaction(id, updatedData) {
  const subIndex = Transaction.findIndex((sub) => sub.id === id);
  if (subIndex === -1) throw new Error("Transaction not found");

  Transaction[subIndex] = {
    ...Transaction[subIndex],
    ...updatedData,
  };

  return Transaction[subIndex];
}

// Delete a Transaction
export async function deleteTransaction(id) {
  const index = Transaction.findIndex((sub) => sub.id === id);
  if (index === -1) throw new Error("Transaction not found");

  Transaction.splice(index, 1);
  return { message: "Transaction deleted successfully" };
}

// Fetch paginated Transactions with search
export async function fetchFilteredTransactions(Transaction, currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const filteredTransactions = Transaction.filter(
    (sub) =>
      sub.name.toLowerCase().includes(Transaction.toLowerCase()) ||
      sub.email.toLowerCase().includes(Transaction.toLowerCase()) ||
      sub.phone.includes(Transaction) ||
      sub.cost.includes(Transaction) ||
      sub.duration.toLowerCase().includes(Transaction.toLowerCase())
  );

  const paginatedTransactions = filteredTransactions.slice(offset, offset + ITEMS_PER_PAGE);

  return paginatedTransactions;
}

// Fetch total pages for pagination
export async function fetchTransactionPages(Transaction) {
  const filteredTransactions = Transaction.filter(
    (sub) =>
      sub.name.toLowerCase().includes(Transaction.toLowerCase()) ||
      sub.email.toLowerCase().includes(Transaction.toLowerCase()) ||
      sub.phone.includes(Transaction) ||
      sub.cost.includes(Transaction) ||
      sub.duration.toLowerCase().includes(Transaction.toLowerCase())
  );

  return Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
}
