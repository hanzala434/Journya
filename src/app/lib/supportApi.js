import { Query } from "./data";

const ITEMS_PER_PAGE = 6;

// Fetch all Querys
export async function fetchQuerys() {
  return Query;
}

// Fetch a single Query by ID
export async function fetchQueryById(id) {
  const sub = Query.find((sub) => sub.id === id);
  if (!sub) throw new Error("Query not found");
  return sub;
}

// Create a new Query
export async function createQuery({ name, email, phone, cost, duration, renewalDate }) {
  const newQuery = {
    id: (Query.length + 1).toString(),
    name,
    email,
    phone,
    cost,
    duration,
    renewalDate,
  };

  Query.push(newQuery);
  return newQuery;
}

// Update an existing Query
export async function updateQuery(id, updatedData) {
  const subIndex = Query.findIndex((sub) => sub.id === id);
  if (subIndex === -1) throw new Error("Query not found");

  Query[subIndex] = {
    ...Query[subIndex],
    ...updatedData,
  };

  return Query[subIndex];
}

// Delete a Query
export async function deleteQuery(id) {
  const index = Query.findIndex((sub) => sub.id === id);
  if (index === -1) throw new Error("Query not found");

  Query.splice(index, 1);
  return { message: "Query deleted successfully" };
}

// Fetch paginated Querys with search
export async function fetchFilteredQuerys(query, currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const filteredQuerys = Query.filter(
    (sub) =>
      sub.name.toLowerCase().includes(query.toLowerCase()) ||
      sub.email.toLowerCase().includes(query.toLowerCase()) ||
      sub.phone.includes(query) ||
      sub.cost.includes(query) ||
      sub.duration.toLowerCase().includes(query.toLowerCase())
  );

  const paginatedQuerys = filteredQuerys.slice(offset, offset + ITEMS_PER_PAGE);

  return paginatedQuerys;
}

// Fetch total pages for pagination
export async function fetchQueryPages(query) {
  const filteredQuerys = Query.filter(
    (sub) =>
      sub.name.toLowerCase().includes(query.toLowerCase()) ||
      sub.email.toLowerCase().includes(query.toLowerCase()) ||
      sub.phone.includes(query) ||
      sub.cost.includes(query) ||
      sub.duration.toLowerCase().includes(query.toLowerCase())
  );

  return Math.ceil(filteredQuerys.length / ITEMS_PER_PAGE);
}
