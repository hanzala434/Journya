

// Fetch all users
export async function fetchUsers() {
  console.log("NEXTAUTH_URL:", process.env.NEXT_PUBLIC_NEXTAUTH_URL);

  const response=await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/users`);
  const users=await response.json();
  return users;
}



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

