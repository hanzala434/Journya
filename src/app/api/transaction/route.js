import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/dbConnections";
import Transaction from "@/app/lib/models/Transaction";

export async function GET() {
  try {
    await connectDB();
    const transactions = await Transaction.find();
    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json({ error: "Failed to fetch transactions" }, { status: 500 });
  }
}

export async function POST(NextRequest) {
  try {
    const { name, email, package: packageType, date } = await NextRequest.json();

    if (!name || !email || !packageType || !date) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 400 }
      );
    }

    await connectDB();
    await Transaction.create({ name, email, package: packageType, date });

    return NextResponse.json(
      { message: "Transaction recorded successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Transaction error:", error);
    return NextResponse.json({ error: "Failed to record transaction" }, { status: 500 });
  }
}
