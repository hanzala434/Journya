import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/dbConnections";
import Query from "@/app/lib/models/Query";

export async function GET() {
  try {
    await connectDB();
    const queries = await Query.find();
    return NextResponse.json(queries, { status: 200 });
  } catch (error) {
    console.error("Error fetching queries:", error);
    return NextResponse.json({ error: "Failed to fetch queries" }, { status: 500 });
  }
}

export async function POST(NextRequest) {
  try {
    const { ticket_id, issue, subject, date, status } = await NextRequest.json();

    if (!ticket_id || !issue || !subject || !date || !status) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 400 }
      );
    }

    await connectDB();
    await Query.create({ ticket_id, issue, subject, date, status });

    return NextResponse.json(
      { message: "Query submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Query submission error:", error);
    return NextResponse.json({ error: "Failed to submit query" }, { status: 500 });
  }
}
