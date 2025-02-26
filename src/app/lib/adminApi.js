import { admins } from "./data";

const ITEMS_PER_PAGE = 6; // Define items per page for pagination

// Fetch all admins
export async function fetchAdmins() {
  console.log("NEXTAUTH_URL:", process.env.NEXT_PUBLIC_NEXTAUTH_URL);

  const response=await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/admin`);
  const admin=await response.json();
  return admin;}

// Fetch a single admin by ID
export async function fetchAdminById(id) {
  const admin = admins.find((admin) => admin.id === id);
  if (!admin) throw new Error("Admin not found");
  return admin;
}

// Create a new admin
export async function createAdmin({ name, phone }) {
  const newAdmin = {
    id: (admins.length + 1).toString(),
    name,
    phone,
    signup: new Date().toLocaleString(),
  };

  admins.push(newAdmin);
  return newAdmin;
}

// Update an existing admin
export async function updateAdmin(id, updatedData) {
  const adminIndex = admins.findIndex((admin) => admin.id === id);
  if (adminIndex === -1) throw new Error("Admin not found");

  admins[adminIndex] = {
    ...admins[adminIndex],
    ...updatedData,
  };

  return admins[adminIndex];
}

// Delete an admin
export async function deleteAdmin(id) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/admin`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
  
    return await response.json();
  }

// Fetch paginated admins with search
export async function fetchFilteredAdmins(query, currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(query.toLowerCase()) ||
      admin.phone.includes(query)
  );

  const paginatedAdmins = filteredAdmins.slice(offset, offset + ITEMS_PER_PAGE);

  return paginatedAdmins;
}

// Fetch total pages for pagination
export async function fetchAdminsPages(query) {
  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(query.toLowerCase()) ||
      admin.phone.includes(query)
  );

  return Math.ceil(filteredAdmins.length / ITEMS_PER_PAGE);
}
