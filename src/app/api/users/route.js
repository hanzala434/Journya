import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { connectDB } from "@/app/lib/dbConnections";
import User from "@/app/lib/models/User";

export async function GET(req) {
  await connectDB();
  const users = await User.find();
  return Response.json(users);
}

export async function POST(NextRequest) {
  try {
    const { email, signup, lastlogin,status,name,duration,plan } = await NextRequest.json();

    if (!email || !signup ||!name || !lastlogin ||!status || !plan || !duration) {
      return NextResponse.json(
        { error: "please fill all the fields" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }



    await User.create({
      email,
      name,
      signup,
      plan,
      duration,
      lastlogin,
      status    });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    await connectDB();

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}


export async function PATCH(request) {
  try {
    const { id, status } = await request.json();
    
    await connectDB();

    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Update status (Activate/Deactivate)
    if (status) {
      user.status = status;
      await user.save(); 
    }

    return NextResponse.json({ 
      message: "User updated successfully", 
      user: user.toObject() 
    });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
