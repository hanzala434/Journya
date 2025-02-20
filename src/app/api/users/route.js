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
