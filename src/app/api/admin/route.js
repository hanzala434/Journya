import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/dbConnections";
import Admin from "@/app/lib/models/Admin";

export async function POST(request) {
  try {
    const { name, email, phone, signup } = await request.json();
    if (!name || !email || !phone || !signup) {
      return NextResponse.json({ error: "Please fill all fields" }, { status: 400 });
    }
    await connectDB();
    const admin = await Admin.create({ name, email, phone, signup });
    return NextResponse.json(admin, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create admin" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const admins = await Admin.find();
    return NextResponse.json(admins, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch admins" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    await connectDB();

    const deleltedAdmin = await Admin.findByIdAndDelete(id);
    if (!deleltedAdmin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete Admin" },
      { status: 500 }
    );
  }
}
