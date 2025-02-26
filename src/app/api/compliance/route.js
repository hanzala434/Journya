import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/dbConnections";
import Compliance from "@/app/lib/models/Compliance";

export async function GET() {
  try {
    await connectDB();
    const compliance = await Compliance.find();
    return NextResponse.json(compliance, { status: 200 });
  } catch (error) {
    console.error("Error fetching queries:", error);
    return NextResponse.json({ error: "Failed to fetch queries" }, { status: 500 });
  }
}

export async function POST(NextRequest) {
  try {
    const {  email,activity,device,location,date,status } = await NextRequest.json();

    if (!email||!activity || !device || !location ||!date ||!status) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 400 }
      );
    }

    await connectDB();
    await Compliance.create({ email,activity,device,location,date,status  });

    return NextResponse.json(
      { message: "Compliance submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Compliance submission error:", error);
    return NextResponse.json({ error: "Failed to submit Compliance" }, { status: 500 });
  }
}
