// import { users } from "./data";

// const ITEMS_PER_PAGE = 6; // Define items per page for pagination

// Fetch all users
export async function fetchUsers() {
  console.log("NEXTAUTH_URL:", process.env.NEXT_PUBLIC_NEXTAUTH_URL);

  const response=await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/users`);
  const users=await response.json();
  return users;
}

// // Fetch a single user by ID
// export async function fetchUserById(id) {
//   const user = users.find((user) => user.id === id);
//   if (!user) throw new Error("User not found");
//   return user;
// }

// Create a new user
export async function createUser(userData) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
}

// ✅ Delete a user by ID
export async function deleteUser(id) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/users`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  });

  return await response.json();
}

// ✅ Update user status (Activate/Deactivate)
export async function updateUserStatus(id, status) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/users`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status })
  });

  return await response.json();
}

// ✅ Reset user password
export async function resetUserPassword(id, newPassword) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/users`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, newPassword })
  });

  return await response.json();
}


// // Update an existing user
// export async function updateUser(id, updatedData) {
//   const userIndex = users.findIndex((user) => user.id === id);
//   if (userIndex === -1) throw new Error("User not found");

//   users[userIndex] = {
//     ...users[userIndex],
//     ...updatedData,
//     lastlogin: new Date().toLocaleString(), // Update last login
//   };

//   return users[userIndex];
// }

// // Delete a user
// export async function deleteUser(id) {
//   const index = users.findIndex((user) => user.id === id);
//   if (index === -1) throw new Error("User not found");

//   users.splice(index, 1);
//   return { message: "User deleted successfully" };
// }

// Fetch paginated users with search

export async function fetchFilteredUsers(searchQuery = "") {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/users/search?query=${searchQuery}`);
    
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const users = await response.json();
    return users;
} catch (error) {
    console.error("Error fetching users:", error);
    return [];
}
}

// export async function fetchFilteredUsers(query) {
  // const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  // const filteredUsers = users.filter(
  //   (user) =>
  //     user.name.toLowerCase().includes(query.toLowerCase()) ||
  //     user.email.toLowerCase().includes(query.toLowerCase()) ||
  //     user.status.toLowerCase().includes(query.toLowerCase())
  // );

  // const paginatedUsers = filteredUsers.slice(offset, offset + ITEMS_PER_PAGE);
//   const res = await fetch(`/api/users?query=${query}`);
//   // if (!res.ok) throw new Error("Failed to fetch users");
//   const data = await res.json();
//   return data;
// }

// // Fetch total pages for pagination
// export async function fetchUsersPages(query) {
//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(query.toLowerCase()) ||
//       user.email.toLowerCase().includes(query.toLowerCase()) ||
//       user.status.toLowerCase().includes(query.toLowerCase())
//   );

//   return Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
// }
