import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import admin from './data.json'

export async function GET(request) {
    return NextResponse.json(admin)
}

export async function POST(request) {
    const {name, email,phone,signup}=await request.json();
    const newAdmin={
        id:uuidv4(),
        name,
        email,
        phone,
        signup

    }
   
    admin.push(newAdmin);
    return NextResponse.json(admin);
}
