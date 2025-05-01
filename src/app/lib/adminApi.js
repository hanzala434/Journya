const ITEMS_PER_PAGE = 6; // Define items per page for pagination

// Fetch all admins
export async function fetchAdmins() {
  const response = await fetch("/api/admin");
  if (!response.ok) throw new Error("Failed to fetch admins");
  return await response.json();
}

// Fetch a single admin by ID
export async function fetchAdminById(id) {
  const response = await fetch(`/api/admin/${id}`);
  if (!response.ok) throw new Error("Admin not found");
  return await response.json();
}

// Create a new admin
export async function createAdmin({ name, email, phone, signup }) {
  const response = await fetch("/api/admin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, signup }),
  });

  if (!response.ok) throw new Error("Failed to create admin");
  return await response.json();
}

// Update an existing admin
export async function updateAdmin(id, updatedData) {
  const response = await fetch(`/api/admin/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) throw new Error("Failed to update admin");
  return await response.json();
}

// Delete an admin
export async function deleteAdmin(id) {
  const response = await fetch("/api/admin", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) throw new Error("Failed to delete admin");
  return await response.json();
}

// Fetch filtered and paginated admins
export async function fetchFilteredAdmins(query, currentPage) {
  const response = await fetch(
    `/api/admin/search?query=${query}&page=${currentPage}&limit=${ITEMS_PER_PAGE}`
  );

  if (!response.ok) throw new Error("Failed to fetch filtered admins");
  return await response.json();
}

// Fetch total pages for pagination
export async function fetchAdminsPages(query) {
  const response = await fetch(
    `/api/admin/count?query=${query}&limit=${ITEMS_PER_PAGE}`
  );

  if (!response.ok) throw new Error("Failed to fetch total pages");
  const { totalPages } = await response.json();
  return totalPages;
}
