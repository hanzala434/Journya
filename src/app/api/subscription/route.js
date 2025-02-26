import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/dbConnections";
import Subscription from "@/app/lib/models/Subscription";

export async function GET() {
  try {
    await connectDB();
    const subscriptions = await Subscription.find();
    return NextResponse.json(subscriptions);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch subscriptions" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, email, cost, duration, renewalDate } = await req.json();
    if (!name || !email || !cost || !duration || !renewalDate) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    await connectDB();
    const newSubscription = await Subscription.create({ name, email, cost, duration, renewalDate });
    return NextResponse.json(newSubscription, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create subscription" }, { status: 500 });
  }
}