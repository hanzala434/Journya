import { users } from "./data";

const ITEMS_PER_PAGE = 6; // Define items per page for pagination

// Fetch all users
export async function fetchUsers() {
  return users;
}

// Fetch a single user by ID
export async function fetchUserById(id) {
  const user = users.find((user) => user.id === id);
  if (!user) throw new Error("User not found");
  return user;
}

// Create a new user
export async function createUser({ name, email, status }) {
  const newUser = {
    id: (users.length + 1).toString(),
    name,
    email,
    signup: new Date().toLocaleString(),
    lastlogin: new Date().toLocaleString(),
    status,
  };

  users.push(newUser);
  return newUser;
}

// Update an existing user
export async function updateUser(id, updatedData) {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) throw new Error("User not found");

  users[userIndex] = {
    ...users[userIndex],
    ...updatedData,
    lastlogin: new Date().toLocaleString(), // Update last login
  };

  return users[userIndex];
}

// Delete a user
export async function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) throw new Error("User not found");

  users.splice(index, 1);
  return { message: "User deleted successfully" };
}

// Fetch paginated users with search
export async function fetchFilteredUsers(query, currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.status.toLowerCase().includes(query.toLowerCase())
  );

  const paginatedUsers = filteredUsers.slice(offset, offset + ITEMS_PER_PAGE);

  return paginatedUsers;
}

// Fetch total pages for pagination
export async function fetchUsersPages(query) {
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.status.toLowerCase().includes(query.toLowerCase())
  );

  return Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
}
