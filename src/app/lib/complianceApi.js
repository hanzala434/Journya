import { Compliance } from "./data";

const ITEMS_PER_PAGE = 6;

// Fetch all Compliances
export async function fetchCompliances() {
  console.log("NEXTAUTH_URL:", process.env.NEXT_PUBLIC_NEXTAUTH_URL);

  const response=await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/compliance`);
  const compliance=await response.json();
  return compliance;
}

// Fetch a single Compliance by ID
export async function fetchComplianceById(id) {
  const sub = Compliance.find((sub) => sub.id === id);
  if (!sub) throw new Error("Compliance not found");
  return sub;
}

// Create a new Compliance
export async function createCompliance({ name, email, phone, cost, duration, renewalDate }) {
  const newCompliance = {
    id: (Compliance.length + 1).toString(),
    name,
    email,
    phone,
    cost,
    duration,
    renewalDate,
  };

  Compliance.push(newCompliance);
  return newCompliance;
}

// Update an existing Compliance
export async function updateCompliance(id, updatedData) {
  const subIndex = Compliance.findIndex((sub) => sub.id === id);
  if (subIndex === -1) throw new Error("Compliance not found");

  Compliance[subIndex] = {
    ...Compliance[subIndex],
    ...updatedData,
  };

  return Compliance[subIndex];
}

// Delete a Compliance
export async function deleteCompliance(id) {
  const index = Compliance.findIndex((sub) => sub.id === id);
  if (index === -1) throw new Error("Compliance not found");

  Compliance.splice(index, 1);
  return { message: "Compliance deleted successfully" };
}

// Fetch paginated Compliances with search
export async function fetchFilteredCompliances(Compliance, currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const filteredCompliances = Compliance.filter(
    (sub) =>
      sub.name.toLowerCase().includes(Compliance.toLowerCase()) ||
      sub.email.toLowerCase().includes(Compliance.toLowerCase()) ||
      sub.phone.includes(Compliance) ||
      sub.cost.includes(Compliance) ||
      sub.duration.toLowerCase().includes(Compliance.toLowerCase())
  );

  const paginatedCompliances = filteredCompliances.slice(offset, offset + ITEMS_PER_PAGE);

  return paginatedCompliances;
}

// Fetch total pages for pagination
export async function fetchCompliancePages(Compliance) {
  const filteredCompliances = Compliance.filter(
    (sub) =>
      sub.name.toLowerCase().includes(Compliance.toLowerCase()) ||
      sub.email.toLowerCase().includes(Compliance.toLowerCase()) ||
      sub.phone.includes(Compliance) ||
      sub.cost.includes(Compliance) ||
      sub.duration.toLowerCase().includes(Compliance.toLowerCase())
  );

  return Math.ceil(filteredCompliances.length / ITEMS_PER_PAGE);
}
