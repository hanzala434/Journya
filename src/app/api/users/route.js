import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import users from './data.json'

export async function GET(request) {
    return NextResponse.json(users)
}

export async function POST(request) {
    const {name,duration,plan,email,lastlogin,status}=await request.json();
    const newUser={
        id:uuidv4(),
        name,
        duration,
        plan,
        email,
        lastlogin,
        status
    }
   
    users.push(newUser);
    return NextResponse.json(users);
}

export async function DELETE(request) {
    const { id } = await request.json();
    const index = users.findIndex((user) => user.id === id);
  
    if (index === -1) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  
    users.splice(index, 1);
    return NextResponse.json({ message: "User deleted successfully" });
  }

  export async function PATCH(request) {
    const { id, status, newPassword } = await request.json();
    const user = users.find((user) => user.id === id);
  
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  
    // Update status (Activate/Deactivate)
    if (status) {
      user.status = status;
    }
  
    // Simulated password reset (In real-world, this would involve hashing)
    if (newPassword) {
      user.password = newPassword; // ⚠️ In production, hash passwords before storing!
    }
  
    return NextResponse.json({ message: "User updated successfully", user });
  }