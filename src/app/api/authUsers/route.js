import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/dbConnections";
import AuthUser from "@/app/lib/models/AuthUser";
import bcrypt from "bcryptjs";


export async function POST(NextRequest) {
  try {
    const { email, password,phone,name } = await NextRequest.json();

    if (!email || !password ||!name || !phone) {
      return NextResponse.json(
        { error: "please fill all the fields" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if user already exists
    const existingUser = await AuthUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    await AuthUser.create({
      email,
      password: hashedPassword,
      name,
      phone
    });

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